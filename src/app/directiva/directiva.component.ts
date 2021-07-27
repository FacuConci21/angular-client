import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  public curses: string[] = [
    'Curso 1', 'Curso 2', 'Curso 3', 'Curso 4',
  ]

  public show: boolean = true;

  constructor() { }

  get isShowed(): boolean {
    return this.show;
  }

}
