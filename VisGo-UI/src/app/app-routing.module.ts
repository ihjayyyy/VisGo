import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeownerLogInComponent } from './components/homeowner/homeowner-log-in/homeowner-log-in.component';
import { VisitorLogInComponent } from './components/visitor/visitor-log-in/visitor-log-in.component';
import { VisitorRegistrationComponent } from './components/visitor/visitor-registration/visitor-registration.component';
import { AdminLogInComponent } from './components/admin/admin-log-in/admin-log-in.component';
import { HomeownerRegistrationComponent } from './components/homeowner/homeowner-registration/homeowner-registration.component';



const routes: Routes = [
  { path:'HomeOwnerRegistration', component: HomeownerRegistrationComponent},
  { path:'', component:HomeownerLogInComponent},
  { path:'VisitorLogin', component:VisitorLogInComponent },
  { path: 'VisitorRegistration', component:VisitorRegistrationComponent},
  { path: 'AdminLogin', component: AdminLogInComponent}
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
