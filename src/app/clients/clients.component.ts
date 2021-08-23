import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  private clients: Client[] = [];

  constructor(private service: ClientService) {}

  get getClients(): Client[] {
    console.log(this.clients);
    return this.clients;
  }

  ngOnInit(): void {
    this.service.getClients().subscribe((clients) => (this.clients = clients));
  }

  delete(client: Client): void {
    Swal.fire({
      title: 'Seguro que desea eliminar este cliente?',
      text: `Una vez que ${client.razonSocial} sea eliminado no habra vuelta atras!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro >:(',
      cancelButtonText: 'no, era mentira >n<',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(client.idCli).subscribe((response) => {
          Swal.fire(
            'Eliminado!',
            `May the force be with you ${client.razonSocial}.`,
            'success'
          );
        });
      }
    });
  }
}
