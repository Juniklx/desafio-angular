import { VeiculosAPI, DadoVeiculo } from './../models/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class Frota {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  listarVeiculos(): Observable<VeiculosAPI> {
    return this.http
    .get<VeiculosAPI>(`${this.apiUrl}/vehicles`)
    .pipe(map((resposta: any) => resposta.vehicles));
  }

  buscarDadosVeiculo(vin: string): Observable<DadoVeiculo> {
    return this.http.post<DadoVeiculo>(`${this.apiUrl}/vehicleData`, { vin });
  }
}
