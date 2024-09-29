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

  obterMedicamentosHoje(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.apiUrl}/hoje`);
  }

  obterMedicamentosHistorico(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.apiUrl}/historico`);
  }

  uploadMedicamentoImagem(userId: number, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.apiUrl}/${userId}/upload`, formData, { responseType: 'text' });
  }

  getMedicamentoImagem(userId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${userId}/imagem`, { responseType: 'blob' });
  }
}
