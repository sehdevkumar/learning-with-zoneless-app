import { Component, inject, OnInit } from '@angular/core';
import { UseClassService } from '../use-class.service';
import { LoggerService } from '../logger.service';

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
