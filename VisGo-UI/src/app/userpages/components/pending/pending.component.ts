import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsOfRequestVisitsComponent } from '../details-of-request-visits/details-of-request-visits.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  daily: boolean = false;
  monthly: boolean = true;

  constructor(
    private dialog: MatDialog,
    ){}

  selected(){
    this.daily = !this.daily;
    this.monthly = !this.monthly;
  }

  viewDetails(){
    this.dialog.open(DetailsOfRequestVisitsComponent)
  }
}
