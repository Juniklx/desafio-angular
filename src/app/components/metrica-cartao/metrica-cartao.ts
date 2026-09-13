import { Component, input } from '@angular/core';

@Component({
  selector: 'app-metrica-cartao',
  imports: [],
  templateUrl: './metrica-cartao.html',
  styleUrl: './metrica-cartao.css',
})
export class MetricaCartao {
  rotulo = input.required<string>();
  valor = input.required<string | number>();
}
