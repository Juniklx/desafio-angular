import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = "http://localhost:3001";

  constructor(private http: HttpClient) {}
  
  private logado = signal(localStorage.getItem('logado') === 'true');

  estaLogado(): boolean {
    return this.logado();
  }
  
  login(usuario: Pick <Usuario, 'nome' | 'senha'>):Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario).pipe(
      tap(() => {
        this.logado.set(true);
        localStorage.setItem('logado', 'true');
      })
    );
  }

  logout() {
    this.logado.set(false);
    localStorage.removeItem('logado');
  }
}