import { Component, OnInit, inject, signal } from '@angular/core';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CampoIcone } from '../../campo-icone/campo-icone';
import { Icone } from '../../icone/icone';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, CampoIcone, Icone],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Painel - Login')
  }

  usuario = {
    nome: '',
    senha: ''
  }
  erroLogin = signal<string | null>(null);

  constructor(private auth: Auth, private router: Router) { }

  login() {
    this.erroLogin.set(null);

    this.auth.login(this.usuario).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        this.erroLogin.set('Usuário ou senha inválidos.');
      }
    })
  }
}
