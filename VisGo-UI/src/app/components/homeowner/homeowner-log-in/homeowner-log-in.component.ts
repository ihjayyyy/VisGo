import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-homeowner-log-in',
  templateUrl: './homeowner-log-in.component.html',
  styleUrls: ['./homeowner-log-in.component.css']
})
export class HomeownerLogInComponent {
  type: string= "password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash"
  hostLoginForm!: any;

  constructor( fb: FormBuilder){
    this.hostLoginForm = fb.group({
      uname:['',Validators.required],
      pass:['',Validators.required],
    })
  }

  get fc(){
    return this.hostLoginForm.controls;
  }

  ngOnInit(): void{

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  onSubmit(){
    if(this.hostLoginForm.valid)
    {
      console.log(this.hostLoginForm.value)
      // send the obj to database
    }
    else{
      ValidateForm.validateAllFormFields(this.hostLoginForm)
    }
  }

}
