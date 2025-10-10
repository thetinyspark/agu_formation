import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _builder:FormBuilder = inject(FormBuilder);

  public form: FormGroup = this._builder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, this.validatePassword]]
  });

  public validatePassword(control:AbstractControl){
    const password:string = control.value; 
    const isValid = password.length >= 8;
    return isValid ? null : { tooShortPassword: true};
  }

  public onSubmit():void{
    if( this.form.valid){
      alert("it is ok !");
    }
  }
}
