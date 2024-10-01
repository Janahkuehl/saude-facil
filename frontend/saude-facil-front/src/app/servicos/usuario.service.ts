import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../componentes/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/usuario';

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  add(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
      return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadProfileImage(userId: number, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.apiUrl}/${userId}/upload`, formData, { responseType: 'text' });
  }

  getUsuarioImagem(userId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${userId}/imagem-perfil`, { responseType: 'blob' });
  }

  validarLogin(credenciais: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, credenciais);
  }
}
