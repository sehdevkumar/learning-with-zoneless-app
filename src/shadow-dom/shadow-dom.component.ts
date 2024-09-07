import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildShadowComComponent } from './child-shadow-com/child-shadow-com.component';

@Component({
  selector: 'app-shadow-dom',
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.css'],
  standalone:true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [ChildShadowComComponent]
})
export class ShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
