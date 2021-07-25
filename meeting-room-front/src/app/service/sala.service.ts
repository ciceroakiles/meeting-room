import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  
  private url = '/api/v1/sala';
  
  constructor(private http: HttpClient) { }

  // list
  listAll(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  // GET
  getSala(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  // POST
  criaSala(sala: Object): Observable<Object> {
    return this.http.post(`${this.url}`, sala);
  }

  // PUT
  atualizaSala(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  // DELETE
  deleteSala(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`,  { responseType: 'text' });
  }
}
