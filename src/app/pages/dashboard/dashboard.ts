import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap, catchError } from 'rxjs/operators';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Frota } from '../../services/frota';
import { Veiculo, DadoVeiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard implements OnInit {
  veiculos = signal<Veiculo[]>([]);
  modeloSelecionado = signal<Veiculo | null>(null);

  vinBuscado = signal('');
  resultadoBusca = signal<DadoVeiculo | null>(null);
  buscaSemResultado = signal(false);

  private buscaSubject = new Subject<Event>();

  constructor(private frota: Frota) {}

  ngOnInit() {
    this.frota.listarVeiculos().subscribe((lista) => {
      this.veiculos.set(lista);
      if (lista.length) this.selecionarModelo(lista[0]);
    });

    this.buscaSubject
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement | null)?.value ?? ''),
        debounceTime(400),
        distinctUntilChanged(),
        map((termo: string) => termo.trim()),
        filter((vin: string) => vin.length > 0),
        switchMap((vin: string) => {
          this.vinBuscado.set(vin);
          return this.frota.buscarDadosVeiculo(vin).pipe(
            catchError(() => {
              this.buscaSemResultado.set(true);
              return of(null);
            })
          );
        })
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

  private selecionarModelo(veiculo: Veiculo) {
    this.modeloSelecionado.set(veiculo);
  }

  aoDigitarBusca(event: Event) {
    this.buscaSubject.next(event);
  }
}