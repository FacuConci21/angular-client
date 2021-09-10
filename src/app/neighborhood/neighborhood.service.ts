import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Neighborhood } from './neighborhood';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NeighborhoodService {
  private endpoint: string = 'http://localhost:8080/api/neighborhood/';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getAll(): Observable<Neighborhood[]> {
    return this.http
      .get(this.endpoint + 'all')
      .pipe(map((response) => response as Neighborhood[]));
  }
}
