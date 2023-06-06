import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import ValidateForm from "src/app/helpers/validateForm";
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  accType: string = "Host";
  altType: string = "Visitor"
  clicked: boolean= false;
  passType: string= "password";
  passIsText: boolean = false;
  passEyeIcon: string ="fa-eye-slash"
  conpassType: string= "password";
  conpassIsText: boolean = false;
  conpassEyeIcon: string ="fa-eye-slash"
  registrationForm: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  constructor( fb: FormBuilder, private service:AuthService, private router:Router, private toastr: ToastrService){

    this.registrationForm = fb.group({
      name : ['', [ Validators.required, Validators.minLength(5)]],
      email : ['', [ Validators.required,Validators.pattern(this.emailRegex)]],
      id : ['', [Validators.required, Validators.minLength(5)]],
      pass : ['', [Validators.required]],
      conPass : ['',[Validators.required]],
      accType : [this.accType,]
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
    this.registrationForm.accType = this.accType
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

  onClick(){
    this.clicked = !this.clicked
    if(this.clicked == true)
    {
      this.accType = 'Visitor'
      this.altType = 'Host'
      this.registrationForm.controls.accType.setValue(this.accType);
    }
    else{
      this.accType ='Host'
      this.altType = 'Visitor'
      this.registrationForm.controls.accType.setValue(this.accType);
    }
    console.log(this.accType)
  }


}
