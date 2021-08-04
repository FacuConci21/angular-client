import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  private clients: Client[] = [];

  constructor(private service: ClientService,) { 
  }

  get getClients(): Client[] {  return this.clients;  }

  ngOnInit(): void {
    this.service.getClients().subscribe(
      clients => this.clients = clients
    );
  }

}
