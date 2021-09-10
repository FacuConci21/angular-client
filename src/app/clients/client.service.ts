import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Client } from './client';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private endpoint: string = 'http://localhost:8080/api/client/';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private router: Router) {}

  getClients(): Observable<Client[]> {
    return this.http
      .get(this.endpoint + 'all')
      .pipe(map((res) => res as Client[]));
  }

  getClient(id: String): Observable<Client> {
    return this.http.get<Client>(this.endpoint + '/one/' + id).pipe(
      catchError((err) => {
        this.router.navigate(['/clientes']);
        console.error(err.message);
        Swal.fire({
          title: 'Error getting client',
          text: err.message,
          icon: 'error',
        });
        return throwError(err);
      })
    );
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
