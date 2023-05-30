import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InviteService } from 'src/app/services/invite.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CoreService } from 'src/app/core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsOfScheduledVisitsComponent } from '../details-of-scheduled-visits/details-of-scheduled-visits.component';


@Component({
  selector: 'app-scheduled-visits',
  templateUrl: './scheduled-visits.component.html',
  styleUrls: ['./scheduled-visits.component.css']
})
export class ScheduledVisitsComponent implements OnInit{
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

  displayedColumns: string[] = ['id', 'name', 'email','number', 'date', 'time', 'action', 'delete'];
  dataSource = new MatTableDataSource<any>;

  data: Array<any> = [];
  dataById: any; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private datePipe:DatePipe, 
    private _inviteService: InviteService,
    private _coreService:CoreService,
    private dialog: MatDialog,
    ){}

  ngOnInit(): void {
    this.getInviteList()
  }

  getInviteList(){
    this._inviteService.getInvites().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res)
        this.data = res
        // console.log(this.data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: (err) =>[
        console.log(err)
      ]
    })
  }

  deleteInvite(id:number){
    this._inviteService.deleteInvite(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Invite Deleted succesfully!','done')
        this.getInviteList()
      },

      error: console.log
    })
  }

  getInvitebyId(id:number){
    this._inviteService.getInvitebyId(id).subscribe({
      next: (res)=>{
        this.dataById = res
        this._inviteService.dataById = this.dataById
        console.log(this._inviteService.dataById)
        this.dialog.open(DetailsOfScheduledVisitsComponent,{panelClass: 'custom-dialog',})
      },
      error:console.log
    })

  }
}
