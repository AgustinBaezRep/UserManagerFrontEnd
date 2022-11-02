import { Component, OnInit, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/userDTO';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatDialog} from '@angular/material/dialog';
import { CreateuserDialogComponent } from '../createuser-dialog/createuser-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteuserDialogComponent } from '../deleteuser-dialog/deleteuser-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'CorreoElectronico', 'FechaNacimiento', 'Telefono', 'Pais', 'RecibirInformacion', 'Acciones'];
  dataSource!: UserDTO[];
  noUsers: boolean = false;

  constructor(private router: Router,
              private userService: UserServiceService,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) 
              { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.GetUsers().subscribe({
      next: (e) => { this.dataSource = e; },
      error: () => {this.noUsers = true},
      complete: () => console.log("complete")});
  }

  removeUser(userId: number) {
    const dialogRef = this.dialog.open(DeleteuserDialogComponent, {
      width: '300px',
      data: userId
    });
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
}