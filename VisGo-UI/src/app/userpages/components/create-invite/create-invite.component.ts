import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { InviteService } from 'src/app/services/invite.service';


@Component({
  selector: 'app-create-invite',
  templateUrl: './create-invite.component.html',
  styleUrls: ['./create-invite.component.css']
})
export class CreateInviteComponent {

  inviteForm: FormGroup;

  constructor(private _fb : FormBuilder, 
    private _inviteService: InviteService, 
    private _dialogRef: DialogRef<CreateInviteComponent>,
    private router: Router,
    private _coreService:CoreService,
    ){
    this.inviteForm = this._fb.group({
      name:'',
      email:'',
      date:'',
      time:'',
      number:'',
      purpose:'',
    })
  }

  onFormSubmit() {
    if (this.inviteForm.valid) {
      this._inviteService.addInvites(this.inviteForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Invite added successfully!', 'done');
          this._dialogRef.close();
          this.router.navigate(['/userPages/scheduled']);
        },
        error: (err: any) => {
          console.error(err);
          this._coreService.openSnackBar('Error occurred while adding invite.', 'error');
        }
      });
    } 
  }
}
