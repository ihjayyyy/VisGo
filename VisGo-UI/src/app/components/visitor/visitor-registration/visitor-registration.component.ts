import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-visitor-registration',
  templateUrl: './visitor-registration.component.html',
  styleUrls: ['./visitor-registration.component.css']
})
export class VisitorRegistrationComponent {

  passType: string= "password";
  passIsText: boolean = false;
  passEyeIcon: string ="fa-eye-slash"
  conpassType: string= "password";
  conpassIsText: boolean = false;
  conpassEyeIcon: string ="fa-eye-slash"
  registrationFormVisitor: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  constructor( fb: FormBuilder){

    this.registrationFormVisitor = fb.group({
      name : ['', [ Validators.required, Validators.minLength(5)]],
      email : ['', [ Validators.required,Validators.pattern(this.emailRegex)]],
      uname : ['', [Validators.required, Validators.minLength(5)]],
      pass : ['', [Validators.required]],
      conPass : ['',[Validators.required]]
    })

  }

  get fc(){
    return this.registrationFormVisitor.controls;
  }

  hideShowPass(){
    this.passIsText = !this.passIsText;
    this.passIsText ? this.passEyeIcon = 'fa-eye' : this.passEyeIcon = 'fa-eye-slash';
    this.passIsText ? this.passType = 'text' : this.passType = 'password'
  }

  hideShowConPass(){
    this.conpassIsText = !this.conpassIsText;
    this.conpassIsText ? this.conpassEyeIcon = 'fa-eye' : this.conpassEyeIcon = 'fa-eye-slash';
    this.conpassIsText ? this.conpassType = 'text' : this.conpassType = 'password'
  }

  onSubmit(){
    if(this.registrationFormVisitor.valid)
    {
      console.log(this.registrationFormVisitor.value)
      // send the obj to database
    }
    else{
      ValidateForm.validateAllFormFields(this.registrationFormVisitor)
    }
  }
}
