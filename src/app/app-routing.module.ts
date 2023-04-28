import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeownerLogInComponent } from './homeowner-log-in/homeowner-log-in.component';
import { HomeownerRegistrationComponent } from './homeowner-registration/homeowner-registration.component';
import { VisitorLogInComponent } from './visitor-log-in/visitor-log-in.component';
import { VisitorRegistrationComponent } from './visitor-registration/visitor-registration.component';


const routes: Routes = [
  { path:'HomeOwnerRegistration', component: HomeownerRegistrationComponent},
  { path:'', component:HomeownerLogInComponent},
  { path:'VisitorLogin', component:VisitorLogInComponent },
  { path: 'VisitorRegistration', component:VisitorRegistrationComponent}
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
