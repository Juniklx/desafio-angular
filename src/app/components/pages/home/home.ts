import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../components/sidebar/sidebar';
import { Title } from '@angular/platform-browser';
import { Header } from "../../header/header";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Sidebar, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Painel - Home')
  }
}
