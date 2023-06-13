import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: any;
  accType: string = "Host";
  visitor: boolean = false;
  host: boolean = true;

  userdata:any;

  constructor(fb: FormBuilder, private router: Router, private service:AuthService, private toastr: ToastrService) {
    this.loginForm = fb.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }

  Vselected() {
    this.visitor = true;
    this.host = false;
    this.accType = 'Visitor';
  }

  Hselected() {
    this.visitor = false;
    this.host = true;
    this.accType = 'Host';

  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.service.GetDatabyId(this.loginForm.value.uname).subscribe(
        (res) => {
          this.userdata = res;
          console.log(this.userdata.accType)
          console.log(this.accType)
          if(this.userdata.accType === this.accType){
            if (this.userdata.pass === this.loginForm.value.pass) {
              sessionStorage.setItem('username', this.userdata.id);
              sessionStorage.setItem('accountType', this.userdata.accType);
              this.router.navigate(['/userPages/dashboard']).then(() => {
              location.reload();
              });
            } 

            else {
              this.toastr.error('Invalid Credentials!');
              this.loginForm.reset();
              ValidateForm.validateAllFormFields(this.loginForm);
            }
          }
          else{
            this.toastr.error('You Selected Wrong Account Type!', 'Please Select the Correct Account Type');
            this.loginForm.reset();
          }  
        },
        (error) => {
          this.toastr.error('Invalid Credentials!');
          this.loginForm.reset();
          ValidateForm.validateAllFormFields(this.loginForm);
        }
      );
    } else {
      this.toastr.error('Invalid Credentials!');
      this.loginForm.reset();
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
}
