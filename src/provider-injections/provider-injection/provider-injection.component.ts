import { Component, inject, OnInit } from '@angular/core';
import { UseClassService } from '../use-class.service';
import { LoggerService } from '../logger.service';


/**
 * @fileoverview 
 * Please visit this awesome blog to understand complete flow
 * https://medium.com/@kumarsehdev600/angular-dependency-injection-simplified-exploring-useclass-useexisting-usevalue-and-usefactory-ab3d16c5d0df
 */

@Component({
  selector: 'app-provider-injection',
  templateUrl: './provider-injection.component.html',
  styleUrls: ['./provider-injection.component.css'],
  standalone:true,
  providers: [

      {
         provide: UseClassService,
         useExisting: LoggerService
      }

  ]
})
export class ProviderInjectionComponent implements OnInit {

  constructor() { }
  
  ls = inject(LoggerService);
  us = inject(UseClassService)


  ngOnInit() {
  
     console.log(this.ls,this.us) 
     if(this.ls === this.us) {
       console.log("equal")
     }

     
  }

}
