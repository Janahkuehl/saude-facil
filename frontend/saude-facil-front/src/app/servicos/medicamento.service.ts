import { Injectable } from '@angular/core';
import { Medicamento } from '../componentes/interfaces/medicamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/medicamento';

  findAll(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }

  findById(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.apiUrl}/${id}`);
  }

  add(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(this.apiUrl, medicamento);
  }

  update(medicamento: Medicamento): Observable<Medicamento> {
      return this.http.put<Medicamento>(`${this.apiUrl}/${medicamento.id}`, medicamento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
