import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dashboard: boolean= true;
  logbook: boolean= false;
  schedule: boolean= false;
  pending: boolean= false;
  location: boolean= false;
  profile: boolean = false;

  Dashselected(){
    this.dashboard = true
    this.logbook = false
    this.schedule = false
    this.pending = false
    this.location = false
    this.profile= false
  }

  Logselected(){
    this.dashboard = false;
    this.logbook = true;
    this.schedule = false;
    this.pending = false;
    this.location = false;
    this.profile= false;
  }

  Schedselected(){
    this.dashboard = false;
    this.logbook = false;
    this.schedule = true;
    this.pending = false;
    this.location = false;
    this.profile= false;
  }

  Pendselected(){
    this.dashboard = false;
    this.logbook = false;
    this.schedule = false;
    this.pending = true;
    this.location = false;
    this.profile= false;
  }

  Locselected(){
    this.dashboard = false;
    this.logbook = false;
    this.schedule = false;
    this.pending = false;
    this.location = true;
    this.profile= false;
  }

  Profselected(){
    this.dashboard = false;
    this.logbook = false;
    this.schedule = false;
    this.pending = false;
    this.location = false;
    this.profile= true;
  }

}
