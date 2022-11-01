import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/userDTO';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatDialog} from '@angular/material/dialog';
import { CreateuserDialogComponent } from '../createuser-dialog/createuser-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'CorreoElectronico', 'FechaNacimiento', 'Telefono', 'Pais', 'RecibirInformacion', 'Acciones'];
  dataSource!: UserDTO[];
  users!: UserDTO[];

  constructor(private router: Router,
              private userService: UserServiceService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) 
              { }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(e => {
      debugger
      this.dataSource = e;
    });
  }

  removeUser(id: any) {
    this.userService.RemoveUser(id).subscribe({
      next: (e) => {this.removedUserResponse()},
      error: (err) => {this.removedUserResponse()},
      complete: () => console.log("complete")});
  }

  openDialogToCreateUser(): void {
    const dialogRef = this.dialog.open(CreateuserDialogComponent, {
      width: '300px'
    });
  }

  openDialogToUpdateUser(user: any): void {
    const dialogRef = this.dialog.open(CreateuserDialogComponent, {
      width: '300px',
      data: user
    });
  }

  removedUserResponse() {
    this._snackBar.open("Usuario eliminado existosamente", "X");
    this.userService.GetUsers().subscribe(e => {
      this.users = e;
    });
  }
}