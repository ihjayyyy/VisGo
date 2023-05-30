import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateInviteComponent } from '../create-invite/create-invite.component';
import { CoreService } from 'src/app/core/core.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  [x: string]: any;
  notif: boolean = false
  clicked(){
    this.notif = !this.notif
    console.log(this.notif)
  }

  constructor(private dialog: MatDialog){}

  openAddSched(){
    this.dialog.open(CreateInviteComponent);
  }
}
