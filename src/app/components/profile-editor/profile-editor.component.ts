import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  myForm = new FormGroup({
    formData: new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.minLength(10),
          Validators.maxLength(50),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ]),
        confirmPassword: new FormControl('', Validators.required),
        terms: new FormControl(false, [Validators.requiredTrue]),
      },
      { validators: passwordMatchValidator }
    ),
  });

  get formData() {
    return this.myForm.get('formData') as FormGroup;
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  onSubmit() {
    console.log('Form valid:', this.myForm.valid);
    console.log(this.myForm.errors);
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      console.warn('Form submitted:', this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
