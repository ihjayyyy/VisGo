import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CoreService } from 'src/app/core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsOfScheduledVisitsComponent } from '../details-of-scheduled-visits/details-of-scheduled-visits.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-scheduled-visits',
  templateUrl: './scheduled-visits.component.html',
  styleUrls: ['./scheduled-visits.component.css']
})
export class ScheduledVisitsComponent implements OnInit{
  // public currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd")
  // public currentMonth = this.datePipe.transform(new Date(),"yyyy-MM")
  // daily: boolean = false;
  // monthly: boolean = true;

  // Dselected() {
  //   this.daily = true;
  //   this.monthly = false;
  // }

  // Mselected() {
  //   this.monthly = true;
  //   this.daily = false;
  // }

  displayedColumns: string[] = ['id', 'name', 'email','number', 'date', 'time', 'action', 'delete'];
  dataSource = new MatTableDataSource<any>;

  data: Array<any> = [];
  dataById: any; 
  user:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog,
    private _authService: AuthService
    ){}

  ngOnInit(): void {
    // console.log(this._authService.userID)
    this.getInvite()
  }

  getInvite(){
    this._authService.GetDatabyId(this._authService.userID).subscribe({
      next:(res)=>{
        this.user = res
        this.data = this.user.Invites
        this.dataSource = new MatTableDataSource(this.user.Invites)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }

  deleteInvites(id: number) {
    this._authService.DeleteInvite(id, this._authService.userID).subscribe({
      next: () => {
        this.toastr.success('Invite deleted successfully.');
        this.getInvite();
      },
      error: (err: any) => {
        console.error(err);
        this.toastr.error('Error occurred while deleting invite.', 'Error');
      }
    });
  }

  getInvitebyId(id: number) {
    this._authService.GetDatabyId(this._authService.userID).subscribe({
      next: (res: any) => {
        if (res && res.Invites) {
          const invite = res.Invites.find((invite: any) => invite.id === id);
          if (invite) {
            this.dataById = invite;
            this._authService.SetInviteDatabyId(this.dataById)
            this.dialog.open(DetailsOfScheduledVisitsComponent)
            // console.log(this.dataById);
          } else {
            console.log('Invite not found.');
          }
        } else {
          console.log('User not found or Invites array not available.');
        }
      },
      error: (err: any) => {
        console.error(err);
        this.toastr.error('Error occurred while getting invite by ID.', 'Error');
      }
    });
  }


 
}
