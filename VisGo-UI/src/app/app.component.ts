import { Component } from '@angular/core';
import { CreateInviteComponent } from './userpages/components/create-invite/create-invite.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisGo';

  constructor(private dialog: MatDialog){}

  openAddSched(){
    this.dialog.open(CreateInviteComponent)
  }
}
