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
      .pipe(map((data: any) => data.map((client: any) => new Client(client))));
  }

  getClient(id: String): Observable<Client> {
    return this.http.get<Client>(this.endpoint + '/one/' + id).pipe(
      catchError((err: any) => {
        this.router.navigate(['/clientes']);
        console.error(err.error.message);
        Swal.fire({
          title: 'Ocurrio un error',
          text: 'mensaje: ' + err.error.message,
          icon: 'error',
        });
        return throwError(err);
      })
    );
  }

  create(client: Client): Observable<Client> {
    return this.http
      .post<Client>(this.endpoint + 'create', client, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e: any) => {
          console.error(e.error.message);
          Swal.fire({
            title: 'Ocurrio un error.',
            text: 'mensaje: ' + e.error.error,
            icon: 'error',
          });
          return throwError(e);
        })
      );
  }

  delete(id: number | undefined): Observable<Client> {
    return this.http
      .delete<Client>(this.endpoint + 'delete/' + id, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e: any) => {
          console.error(e.error.message);
          Swal.fire({
            title: 'Ocurrio un error.',
            text: 'mensaje: ' + e.error.message,
            icon: 'error',
          });
          return throwError(e);
        })
      );
  }
}
