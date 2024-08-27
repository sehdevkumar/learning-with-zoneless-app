import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defered-blocks',
  templateUrl: './defered-blocks.component.html',
  styleUrls: ['./defered-blocks.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class DeferedBlocksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
