import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsavel } from '../componentes/interfaces/responsavel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8080/responsavel';

  findAll(): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(this.apiUrl);
  }

  findById(id: number): Observable<Responsavel> {
    return this.http.get<Responsavel>(`${this.apiUrl}/${id}`);
  }

  add(responsavel: Responsavel): Observable<Responsavel> {
    return this.http.post<Responsavel>(this.apiUrl, responsavel);
  }

  update(responsavel: Responsavel): Observable<Responsavel> {
      return this.http.put<Responsavel>(`${this.apiUrl}/${responsavel.id}`, responsavel);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

