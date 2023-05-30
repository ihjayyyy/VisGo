import { Component } from '@angular/core';
import { InviteService } from 'src/app/services/invite.service';

@Component({
  selector: 'app-details-of-scheduled-visits',
  templateUrl: './details-of-scheduled-visits.component.html',
  styleUrls: ['./details-of-scheduled-visits.component.css']
})
export class DetailsOfScheduledVisitsComponent {
  constructor(private _inviteService: InviteService) {}

  data:any
  
  ngOnInit(): void {
    this.data = this._inviteService.dataById
  };
  
}
