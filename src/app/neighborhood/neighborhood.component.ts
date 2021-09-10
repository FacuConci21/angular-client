import { Component, Inject, OnInit } from '@angular/core';
import { Neighborhood } from './neighborhood';
import { NeighborhoodService } from './neighborhood.service';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css'],
})
export class NeighborhoodComponent implements OnInit {
  constructor(
    @Inject(Neighborhood) private neighbor: Neighborhood[],
    private service: NeighborhoodService
  ) {}

  ngOnInit(): void {}
}
