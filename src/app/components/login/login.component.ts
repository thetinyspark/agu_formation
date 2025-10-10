import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _builder:FormBuilder = inject(FormBuilder);

  public form: FormGroup = this._builder.group({
    email: ['', [Validators.required, this.validateEmail  ]],
    password: ['', [Validators.required, this.validatePassword]]
  });

  public validateEmail(control:AbstractControl){
    const email:string = control.value; 
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? null : { invalidEmail: true};
  }
  public validatePassword(control:AbstractControl){
    const password:string = control.value; 
    const isValid = password.length >= 8;
    return isValid ? null : { tooShortPassword: true};
  }

  public onSubmit():void{
    if( this.form.valid){
    }
  }
}
