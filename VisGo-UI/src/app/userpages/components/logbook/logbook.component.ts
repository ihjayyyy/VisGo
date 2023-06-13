import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { DetailsOfVisitsComponent } from '../details-of-visits/details-of-visits.component';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent {
  // public currentDate = this.datePipe.transform(new Date(),"yyyy-MM-dd")
  // public currentMonth = this.datePipe.transform(new Date(),"yyyy-MM")
  // daily: boolean = false;
  // monthly: boolean = true;

  displayedColumns: string[] = ['id', 'name', 'email', 'Check In', 'dateCO', 'status', 'action'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  data: Array<any> = [];
  dataById: any; 
  user:any;
  cIn:boolean = false
  cOut:boolean = false

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
    this.getLogbook()
    console.log(this.data)
  }

  getLogbook(){
    this._authService.GetDatabyId(this._authService.userID).subscribe({
      next:(res)=>{
        this.user = res
        this.data = this.user.Logbook
        this.dataSource = new MatTableDataSource(this.user.Logbook)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }

  getLogbookbyId(id: number) {
    this._authService.GetDatabyId(this._authService.userID).subscribe({
      next: (res: any) => {
        if (res && res.Logbook) {
          const logbook = res.Logbook.find((invite: any) => invite.id === id);
          if (logbook) {
            this.dataById = logbook;
            this._authService.SetLogbookDatabyId(this.dataById)
            this.dialog.open(DetailsOfVisitsComponent)
            console.log(this.dataById);
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

  checkIn(logbook:any){
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    logbook.dci = formattedDate;
    logbook.timeIn = formattedTime;
    console.log(logbook.dci)
  
    // Update the logbook entry in the database using your AuthService or API service
    this._authService.updateLogbook(logbook).subscribe({
      next: () => {
        // Success message or any other actions you want to perform
        console.log('Check-in successful.');
      },
      error: (err: any) => {
        console.error(err);
        this.toastr.error('Error occurred while updating logbook.', 'Error');
      }
    });
  }

  checkOut(logbook:any){
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    logbook.dco = formattedDate;
    logbook.timeOut = formattedTime;
  
    // Update the logbook entry in the database using your AuthService or API service
    this._authService.updateLogbook(logbook).subscribe({
      next: () => {
        // Success message or any other actions you want to perform
        console.log('Check-in successful.');
      },
      error: (err: any) => {
        console.error(err);
        this.toastr.error('Error occurred while updating logbook.', 'Error');
      }
    });
  }
}
