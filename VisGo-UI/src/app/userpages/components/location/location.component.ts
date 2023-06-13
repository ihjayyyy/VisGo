import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationTrackingComponent } from '../location-tracking/location-tracking.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  daily: boolean = false;
  monthly: boolean = true;

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }

  constructor(
    private dialog: MatDialog,
    ){}

  viewDetails(){
    this.dialog.open(LocationTrackingComponent)
  }
}
