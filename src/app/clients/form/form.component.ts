import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  
  private title: string = "Nuevo Cliente";
  private client: Client = new Client();

  constructor() { }

  get getClient() : Client {
    return this.client;
  }

  get getTitle() : string {
    return this.title;
  }
  
  public createNewClient() : Client {
    console.log('clickeado');
    console.log(this.client);
    return new Client;
  }

  ngOnInit(): void {
  }

}
