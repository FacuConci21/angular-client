import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  private title: string = 'Nuevo Cliente';
  private client: Client = new Client();

  constructor(
    private service: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  get getClient(): Client {
    return this.client;
  }

  get getTitle(): string {
    return this.title;
  }

  public createNewClient(): void {
    this.service.create(this.client).subscribe((result) => {
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
      const id = params['id'];

      if (id) {
        this.service.getClient(id).subscribe((client) => {
          this.client = client;
        });
      }
    });
  }

  ngOnInit(): void {
    this.loadClient;
  }
}
