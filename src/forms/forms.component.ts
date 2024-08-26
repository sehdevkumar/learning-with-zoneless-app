import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
})
export class FormsComponent implements OnInit {
  constructor() {}

  sampleReactiveForm!: FormGroup;

  ngOnInit() {

    this.sampleReactiveForm = new FormGroup<any>({

        name: new FormControl('',Validators.required),
        mail: new FormControl('',Validators.required)

   } )


   this.sampleReactiveForm.setValue({
     name: 'hey',
     mail: 'i am here'
   })

  }

  onFormSubmit({target}: any) {
     console.log(target.name.value,target.mail.value,this.sampleReactiveForm.invalid);
  }
}
