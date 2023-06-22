import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLogInComponent } from './auth/components/admin-log-in/admin-log-in.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { UserPagesModule } from './userpages/userpages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr'
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { AdminDashboardComponent} from './userpages-admin/admin-components/admin-dashboard/admin-dashboard.component'
import { AdminDeleteReportComponent } from './userpages-admin/admin-components/admin-delete-report/admin-delete-report.component';
import { AdminDetailsOfVisitComponent } from './userpages-admin/admin-components/admin-details-of-visit/admin-details-of-visit.component';
import { AdminLogbookComponent } from './userpages-admin/admin-components/admin-logbook/admin-logbook.component';
import { AdminProfileComponent } from './userpages-admin/admin-components/admin-profile/admin-profile.component';
import { AdminReportDetailsComponent } from './userpages-admin/admin-components/admin-report-details/admin-report-details.component';
import { AdminScheduledVisitDetailsComponent } from './userpages-admin/admin-components/admin-scheduled-visit-details/admin-scheduled-visit-details.component';
import { AdminScheduledVisitsComponent } from './userpages-admin/admin-components/admin-scheduled-visits/admin-scheduled-visits.component';
import { AdminDeleteUserComponent } from './userpages-admin/admin-components/admin-delete-user/admin-delete-user.component';
import { AdminNewUserComponent } from './userpages-admin/admin-components/admin-new-user/admin-new-user.component';
import { AdminReportsComponent } from './userpages-admin/admin-components/admin-reports/admin-reports.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminDeleteReportComponent,
    AdminDetailsOfVisitComponent,
    AdminLogbookComponent,
    AdminProfileComponent,
    AdminReportDetailsComponent,
    AdminScheduledVisitDetailsComponent,
    AdminScheduledVisitsComponent,
    AdminDeleteUserComponent,
    AdminNewUserComponent,
    AdminReportsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserPagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
