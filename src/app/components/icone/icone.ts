import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icone',
  imports: [],
  templateUrl: './icone.html',
  styleUrl: './icone.css',
})
export class Icone {
  nome = input.required<'usuario' | 'senha' | 'carro' | 'busca'>();
}