import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CLIENTS } from 'src/static/clients.json';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
