import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPagesComponent } from './userpages.component';
import { RouterModule } from '@angular/router';
import {  UserPagesRoutingModule } from './userpages-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ScheduledVisitsComponent } from './components/scheduled-visits/scheduled-visits.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PendingComponent } from './components/pending/pending.component';
import { LocationComponent } from './components/location/location.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    UserPagesComponent,
    HeaderComponent,
    NavbarComponent,
    LogbookComponent,
    ScheduledVisitsComponent,
    DashboardComponent,
    PendingComponent,
    LocationComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserPagesRoutingModule,
  ]
})
export class UserPagesModule { }
