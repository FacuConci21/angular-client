import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Neighborhood } from 'src/app/neighborhood/neighborhood';
import { NeighborhoodService } from 'src/app/neighborhood/neighborhood.service';
import Swal from 'sweetalert2';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  private title: string = 'Nuevo Cliente';
  private client: Client = new Client({});
  private neighbors: Neighborhood[] = [];

  constructor(
    private neighborService: NeighborhoodService,
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get getClient(): Client {
    return this.client;
  }

  get getTitle(): string {
    return this.title;
  }

  get getNeighbors(): Neighborhood[] {
    return this.neighbors;
  }

  public createNewClient(): void {
    this.clientService.create(this.client).subscribe((result) => {
      this.router.navigate(['/clientes']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Client has been saved',
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }

  public loadClient(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.clientService.getClient(id).subscribe((client) => {
          this.client = client;
        });
      }
    });
  }

  loadNeighbors(): void {
    this.neighborService.getAll().subscribe((neighbors) => {
      this.neighbors = neighbors;
    });
  }

  ngOnInit(): void {
    this.loadClient();
    this.loadNeighbors();
    console.log('Barrios: ' + this.neighbors);
  }
}
