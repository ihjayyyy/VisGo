import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserPagesComponent } from './userpages.component';
import { RouterModule } from '@angular/router';
import { UserPagesRoutingModule } from './userpages-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ScheduledVisitsComponent } from './components/scheduled-visits/scheduled-visits.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PendingComponent } from './components/pending/pending.component';
import { LocationComponent } from './components/location/location.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateInviteComponent } from './components/create-invite/create-invite.component';
import { DetailsOfVisitsComponent } from './components/details-of-visits/details-of-visits.component';
import { DetailsOfScheduledVisitsComponent } from './components/details-of-scheduled-visits/details-of-scheduled-visits.component';
import { DetailsOfRequestVisitsComponent } from './components/details-of-request-visits/details-of-request-visits.component';
import { LocationTrackingComponent } from './components/location-tracking/location-tracking.component';

@NgModule({
  declarations: [
    UserPagesComponent,
    HeaderComponent,
    LogbookComponent,
    ScheduledVisitsComponent,
    DashboardComponent,
    PendingComponent,
    LocationComponent,
    ProfileComponent,
    NavbarComponent,
    CreateInviteComponent,
    DetailsOfVisitsComponent,
    DetailsOfScheduledVisitsComponent,
    DetailsOfRequestVisitsComponent,
    LocationTrackingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserPagesRoutingModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[DatePipe]
})
export class UserPagesModule{ }
