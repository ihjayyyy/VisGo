import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLogInComponent } from './auth/components/admin-log-in/admin-log-in.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LogbookComponent } from './userpages/components/logbook/logbook.component';
import { ScheduledVisitsComponent } from './userpages/components/scheduled-visits/scheduled-visits.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserPagesModule } from './userpages/userpages.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
