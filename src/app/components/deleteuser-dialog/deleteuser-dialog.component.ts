import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
import { CreateuserDialogComponent } from '../createuser-dialog/createuser-dialog.component';

@Component({
  selector: 'app-deleteuser-dialog',
  templateUrl: './deleteuser-dialog.component.html',
  styleUrls: ['./deleteuser-dialog.component.css']
})
export class DeleteuserDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserServiceService,
              private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CreateuserDialogComponent>) 
              { }

  ngOnInit(): void { }

  cancelAction() {
    this.dialogRef.close();
  }

  removeUser() {
    this.userService.RemoveUser(this.data).subscribe({
      next: (e) => {
        this._snackBar.open("Usuario eliminado existosamente", "X");
        this.dialogRef.close();
      },
      error: (err) => {
        alert("Error al eliminar el usuario"); 
        this.dialogRef.close();
      },
      complete: () => console.log("complete")});
  }
}
