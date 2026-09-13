import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  selector: 'app-painel-layout',
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './painel-layout.html',
  styleUrl: './painel-layout.css',
})
export class PainelLayout {}