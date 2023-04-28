import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-homeowner-registration',
  templateUrl: './homeowner-registration.component.html',
  styleUrls: ['./homeowner-registration.component.css']
})
export class HomeownerRegistrationComponent {

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

  onSubmit(){
    console.log(this.registrationFormHost.value)
  }
}


