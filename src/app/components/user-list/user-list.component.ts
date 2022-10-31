import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/userDTO';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatDialog} from '@angular/material/dialog';
import { CreateuserDialogComponent } from '../createuser-dialog/createuser-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellido', 'CorreoElectronico', 'FechaNacimiento', 'Telefono', 'Pais', 'Acciones'];
  dataSource!: UserDTO[];

  constructor(private router: Router,
              private userService: UserServiceService,
              public dialog: MatDialog) 
              { }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(e => {
      this.dataSource = e;
    });
  }

  openDialogToCreateUser(): void {
    const dialogRef = this.dialog.open(CreateuserDialogComponent, {
      width: '300px'
    });
  }

  openDialogToUpdateUser(user: UserDTO): void {
    const dialogRef = this.dialog.open(CreateuserDialogComponent, {
      width: '300px'
    });
  }
}