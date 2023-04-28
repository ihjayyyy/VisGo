import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorLogInComponent } from './components/visitor/visitor-log-in/visitor-log-in.component';
import { HomeownerLogInComponent } from './components/homeowner/homeowner-log-in/homeowner-log-in.component';
import { VisitorRegistrationComponent } from './components/visitor/visitor-registration/visitor-registration.component';
import { AdminLogInComponent } from './components/admin/admin-log-in/admin-log-in.component';
import { HomeownerRegistrationComponent } from './components/homeowner/homeowner-registration/homeowner-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorRegistrationComponent,
    VisitorLogInComponent,
    HomeownerLogInComponent,
    HomeownerRegistrationComponent,
    AdminLogInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
