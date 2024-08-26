import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';



/**
 * @fileoverview
 * So We use Injection token to inject the string,array or any premitive value normaly sevices only can be injectables.
 *
 *
 */



  export const configToken = new InjectionToken<string>('hello')


@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrls: ['./injection-token.component.css'],
  imports: [CommonModule],
  standalone:true,
  providers: [{
    provide: configToken, useValue: 'hello'
  }]

})
export class InjectionTokenComponent implements OnInit {

  constructor(@Inject(configToken) token:any) {
    console.log(token)
   }

  ngOnInit() {
  }

}
