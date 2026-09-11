import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = "http://localhost:3001";

  private http = inject(HttpClient);

  private logado = signal(sessionStorage.getItem('logado') === 'true');

  estaLogado(): boolean {
    return this.logado();
  }

  login(usuario: Pick<Usuario, 'nome' | 'senha'>): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap(() => {
        this.logado.set(true);
        sessionStorage.setItem('logado', 'true');
      })
    );
  }

  logout() {
    this.logado.set(false);
    sessionStorage.removeItem('logado');
  }
}