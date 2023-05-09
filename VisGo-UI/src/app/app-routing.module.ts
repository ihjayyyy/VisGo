import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLogInComponent } from './auth/components/admin-log-in/admin-log-in.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'AdminLogin',component:AdminLogInComponent},
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
