import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-create-invite',
  templateUrl: './create-invite.component.html',
  styleUrls: ['./create-invite.component.css']
})
export class CreateInviteComponent {

  loginForm!: any;
  dummyAcc: any = {
    userName: '',
    password: ''
  };
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      visName: ['', Validators.required],
      visEmail: ['', Validators.required, Validators.pattern(this.emailRegex)],
      visPhone:['',Validators.required],
      visAccID:['', Validators.required],
      date:['', Validators.required],
      time:['',Validators.required],
      purpose:['',Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }



  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
    else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
}
