import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, effect } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class FormsComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  sampleReactiveForm!: FormGroup;
  addressArray = signal<FormArray<any>>(this.fb.array([]));

  ngOnInit() {
    this.sampleReactiveForm = this.fb.group({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      address: this.addressArray(),
    });

    // Watch for form array changes and update the signal accordingly
    effect(() => {
      this.addressArray.set(
        this.sampleReactiveForm.get('address') as FormArray
      );
    });
  }

  addAddress() {
    const city = this.fb.control('', Validators.required);
    const zipCode = this.fb.control('', Validators.required);
    this.addressArray().push(
      this.fb.group({
        city: city,
        zipCode: zipCode,
      })
    );
  }

  onFormSubmit(event?: any) {
    if (this.sampleReactiveForm.valid) {
      console.log(this.sampleReactiveForm.value);
    } else {
      console.log('Form is invalid');
    }

      console.log(this.sampleReactiveForm.value);

  }
}
