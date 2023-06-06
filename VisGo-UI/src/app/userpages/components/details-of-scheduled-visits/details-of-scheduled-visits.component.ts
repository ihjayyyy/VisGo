import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details-of-scheduled-visits',
  templateUrl: './details-of-scheduled-visits.component.html',
  styleUrls: ['./details-of-scheduled-visits.component.css']
})
export class DetailsOfScheduledVisitsComponent {
  constructor(private _authService: AuthService) {}
  inviteData: any;
  ngOnInit(): void {
     this.inviteData = this._authService.PassInviteDatabyId();
    //  console.log(this.inviteData)
  };
  
}
