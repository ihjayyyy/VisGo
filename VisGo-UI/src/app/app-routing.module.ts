import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLogInComponent } from './components/admin/admin-log-in/admin-log-in.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogbookComponent } from './components/logbook/logbook.component';

const routes: Routes = [
  { path:'Register', component: RegisterComponent},
  { path:'', component:LoginComponent},
  { path:'AdminLogin', component: AdminLogInComponent},
  { path: 'Logbook', component:LogbookComponent}
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
