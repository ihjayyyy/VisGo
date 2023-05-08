import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string= "password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash"
  loginForm!: any;
  accType: string = "HOST";
  visitor: boolean= false;
  host: boolean= true;

  dummyAcc: any = {
    userName: '',
    password:''
  };

  constructor( fb: FormBuilder, private router: Router){
    this.loginForm = fb.group({
      uname:['',Validators.required],
      pass:['',Validators.required],
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  ngOnInit(): void{
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }

  selected(){
    console.log(this.visitor,this.host);
    this.visitor = !this.visitor;
    this.host = !this.host;
    console.log(this.visitor,this.host);
    if(this.visitor == true)
    {
      this.accType = 'VISITOR'
    }
    else
    {
      this.accType = 'HOST'
    }
  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
      this.dummyAcc.userName = this.loginForm.value.uname
      this.dummyAcc.password = this.loginForm.value.pass
      if(this.dummyAcc.userName == 'user123' && this.dummyAcc.password =='user123')
      {
        this.loginForm.reset()
        this.router.navigate(['Logbook'])
      }
      else{
        this.loginForm.reset()
        alert("Invalid Username and Password")
      }
    }
    else{
      ValidateForm.validateAllFormFields(this.loginForm)
    }
  }
}
