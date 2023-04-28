import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-visitor-registration',
  templateUrl: './visitor-registration.component.html',
  styleUrls: ['./visitor-registration.component.css']
})
export class VisitorRegistrationComponent {

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

  onSubmit(){
    console.log(this.registrationFormVisitor.value)
  }
}
