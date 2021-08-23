import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private endpoint: string = 'http://localhost:8080/api/client/';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.endpoint + 'all');
  }

  getClient(id: String): Observable<Client> {
    return this.http.get<Client>(this.endpoint + '/one/' + id);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.endpoint + 'create', client, {
      headers: this.httpHeaders,
    });
  }

  delete(id: number | undefined): Observable<Client> {
    return this.http.delete<Client>(this.endpoint + 'delete/' + id, {
      headers: this.httpHeaders,
    });
  }
}
