import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorLogInComponent } from './visitor-log-in/visitor-log-in.component';
import { HomeownerLogInComponent } from './homeowner-log-in/homeowner-log-in.component';
import { HomeownerRegistrationComponent } from './homeowner-registration/homeowner-registration.component';
import { VisitorRegistrationComponent } from './visitor-registration/visitor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorLogInComponent,
    HomeownerLogInComponent,
    HomeownerRegistrationComponent,
    VisitorRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
