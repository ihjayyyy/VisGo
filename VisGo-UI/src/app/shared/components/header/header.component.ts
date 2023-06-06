import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateInviteComponent } from 'src/app/userpages/components/create-invite/create-invite.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd")
  public currentMonth = this.datePipe.transform(new Date(),"yyyy-MM")
  daily: boolean = false;
  monthly: boolean = true;

  Dselected() {
    this.daily = true;
    this.monthly = false;
  }

  Mselected() {
    this.monthly = true;
    this.daily = false;
  }
  
constructor(private datePipe:DatePipe, private dialog: MatDialog, private router:Router){}



openAddSched(){
  this.dialog.open(CreateInviteComponent)
}

clearSession(){
  sessionStorage.clear();
  this.router.navigate(['']).then(() => {
    location.reload();
  });
}
}
