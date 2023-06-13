import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  
  clicked: boolean= false;
  passType: string= "password";
  passIsText: boolean = false;
  passEyeIcon: string ="fa-eye-slash";
  registrationForm: any;

  constructor( fb: FormBuilder, private service:AuthService, private router:Router, private toastr: ToastrService){

    this.registrationForm = fb.group({
      id : ['', [Validators.required, Validators.minLength(5)]],
      pass : ['', [Validators.required]],
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

  onSubmit(){
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value)
      this.service.Register(this.registrationForm.value).subscribe(res =>{
        this.toastr.success('Registered Successfully');
        this.router.navigate([''])
      });
    }
    else{
      this.toastr.warning('Please Enter Valid Data')
      ValidateForm.validateAllFormFields(this.registrationForm)
    }
  }


}
