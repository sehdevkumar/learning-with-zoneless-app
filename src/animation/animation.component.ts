import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  standalone:true,
  imports: [CommonModule],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('* => closed', [animate('1s')]),
      transition('* => open', [animate('0.5s')]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {

  toggleValue = signal('open')

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
     this.toggleValue.set(this.toggleValue() ==='open' ? 'closed' : 'open')
  }

}
