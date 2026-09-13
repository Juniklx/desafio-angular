import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Icone } from '../icone/icone';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Icone],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private auth: Auth, private router: Router) { }

  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}