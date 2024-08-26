import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class ProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
