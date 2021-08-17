import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  
  private title: string = "Nuevo Cliente";
  private client: Client = new Client();

  constructor(private service: ClientService, private router: Router, ) { }

  get getClient() : Client {
    return this.client;
  }

  get getTitle() : string {
    return this.title;
  }
  
  public createNewClient() : void {
    this.service.create(this.client).subscribe(
      result => { this.router.navigate(['/clientes'])}
    );
  }

  ngOnInit(): void {
  }

}
