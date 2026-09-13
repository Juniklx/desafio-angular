import { Component, OnInit, signal, inject, DestroyRef, effect } from '@angular/core'
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, catchError } from 'rxjs/operators';
import { Frota } from '../../../services/frota';
import { VeiculoAPI, DadoVeiculo } from '../../../models/veiculo.model';
import { Title } from '@angular/platform-browser';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MetricaCartao } from '../../metrica-cartao/metrica-cartao';
import { CampoIcone } from '../../campo-icone/campo-icone';
import { Icone } from '../../icone/icone';

function extrairValorInput(event: Event): string {
  return (event.target as HTMLInputElement | null)?.value ?? '';
}

@Component({
  selector: 'app-dashboard',
  imports: [ MetricaCartao, CampoIcone, Icone],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private titleService = inject(Title);
  private buscaSubject = new Subject<Event>();
  private frota = inject(Frota);
  private destroyRef = inject(DestroyRef);

  veiculos = toSignal(this.frota.listarVeiculos(), { initialValue: [] });
  modeloSelecionado = signal<VeiculoAPI | null>(null);
  vinBuscado = signal('');
  resultadoBusca = signal<DadoVeiculo | null>(null);
  buscaSemResultado = signal(false);

  constructor() {
    effect(() => {
      const lista = this.veiculos();
      if (lista.length > 0 && this.modeloSelecionado() === null) {
        this.selecionarModelo(lista[0]);
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Painel - Dashboard');

    this.buscaSubject
      .pipe(
        map((event: Event) => extrairValorInput(event)),
        debounceTime(400),
        distinctUntilChanged(),
        map((termo: string) => termo.trim()),
        filter((vin: string) => vin.length > 0),
        switchMap((vin: string) => {
          this.vinBuscado.set(vin);
          return this.frota.buscarDadosVeiculo(vin).pipe(
            catchError((erro) => {
              console.error('Erro ao buscar veículo:', erro);
              this.buscaSemResultado.set(true);
              return of(null);
            }),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((dado) => {
        this.buscaSemResultado.set(!dado);
        this.resultadoBusca.set(dado);
      });
  }

  aoTrocarModelo(id: string) {
    const veiculo = this.veiculos().find((v) => String(v.id) === id);
    if (veiculo) this.selecionarModelo(veiculo);
  }

  private selecionarModelo(veiculo: VeiculoAPI) {
    this.modeloSelecionado.set(veiculo);
  }

  aoDigitarBusca(event: Event) {
    this.buscaSubject.next(event);
  }
}