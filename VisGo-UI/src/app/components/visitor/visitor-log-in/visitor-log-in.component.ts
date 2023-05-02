import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-visitor-log-in',
  templateUrl: './visitor-log-in.component.html',
  styleUrls: ['./visitor-log-in.component.css']
})
export class VisitorLogInComponent {
  type: string= "password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash"
  visitorLoginForm: any;

  constructor( fb: FormBuilder){
    this.visitorLoginForm = fb.group({
      uname:['',Validators.required],
      pass:['',Validators.required],
    })
  }

  get fc(){
    return this.visitorLoginForm.controls;
  }

  ngOnInit(): void{

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  onSubmit(){
    if(this.visitorLoginForm.valid)
    {
      console.log(this.visitorLoginForm.value)
      // send the obj to database
    }
    else{
      ValidateForm.validateAllFormFields(this.visitorLoginForm)
    }
  }

}