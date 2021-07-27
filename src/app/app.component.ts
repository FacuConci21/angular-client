import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola, Mundo!.';

  curso: string = 'Angular 7 - Spring de Udemy';
  profesor: string = 'Andres Guzman';
  alumno: string = 'Facundo Conci';
}
