import { Injectable } from '@angular/core';
import { Consulta } from '../componentes/interfaces/consulta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/consulta';

  findAll(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.apiUrl);
  }

  findById(id: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.apiUrl}/${id}`);
  }

  add(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.apiUrl, consulta);
  }

  update(consulta: Consulta): Observable<Consulta> {
      return this.http.put<Consulta>(`${this.apiUrl}/${consulta.id}`, consulta);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obterConsultasHoje(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.apiUrl}/consultas-hoje`);
  }
}
