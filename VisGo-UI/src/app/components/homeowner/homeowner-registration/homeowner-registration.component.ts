import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';


@Component({
  selector: 'app-homeowner-registration',
  templateUrl: './homeowner-registration.component.html',
  styleUrls: ['./homeowner-registration.component.css']
})
export class HomeownerRegistrationComponent {

  passType: string= "password";
  passIsText: boolean = false;
  passEyeIcon: string ="fa-eye-slash"
  conpassType: string= "password";
  conpassIsText: boolean = false;
  conpassEyeIcon: string ="fa-eye-slash"
  registrationFormHost: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  constructor( fb: FormBuilder){

    this.registrationFormHost = fb.group({
      name : ['', [ Validators.required, Validators.minLength(5)]],
      email : ['', [ Validators.required,Validators.pattern(this.emailRegex)]],
      uname : ['', [Validators.required, Validators.minLength(5)]],
      pass : ['', [Validators.required]],
      conPass : ['',[Validators.required]]
    })

  }

  get fc(){
    return this.registrationFormHost.controls;
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
    if(this.registrationFormHost.valid)
    {
      console.log(this.registrationFormHost.value)
      // send the obj to database
    }
    else{
      ValidateForm.validateAllFormFields(this.registrationFormHost)
    }
  }
}


