import { Component, input } from '@angular/core';

@Component({
  selector: 'app-campo-icone',
  imports: [],
  templateUrl: './campo-icone.html',
  styleUrl: './campo-icone.css',
})
export class CampoIcone {
  variante = input<string>('');
}