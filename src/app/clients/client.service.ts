import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private endpoint: string = 'http://localhost:8080/api/client/'

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.endpoint + 'sup');
  }
}
