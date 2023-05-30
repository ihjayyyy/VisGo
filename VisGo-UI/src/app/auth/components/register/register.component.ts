import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  accType: string = "Host";
  clicked: boolean= false;
  passType: string= "password";
  passIsText: boolean = false;
  passEyeIcon: string ="fa-eye-slash"
  conpassType: string= "password";
  conpassIsText: boolean = false;
  conpassEyeIcon: string ="fa-eye-slash"
  registrationForm: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  constructor( fb: FormBuilder, private service:AuthService){

    this.registrationForm = fb.group({
      name : ['', [ Validators.required, Validators.minLength(5)]],
      email : ['', [ Validators.required,Validators.pattern(this.emailRegex)]],
      uname : ['', [Validators.required, Validators.minLength(5)]],
      pass : ['', [Validators.required]],
      conPass : ['',[Validators.required]]
    })

  }

  get fc(){
    return this.registrationForm.controls;
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
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value)
      // send the obj to database
    }
    else{
      ValidateForm.validateAllFormFields(this.registrationForm)
    }
  }

  onClick(){
    this.clicked = !this.clicked
    if(this.clicked == true)
    {
      this.accType = 'Visitor'
    }
    else{
      this.accType ='Host'
    }
  }


}
