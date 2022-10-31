import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { countriesViewModel } from 'src/app/models/countriesViewModel';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserViewModel } from 'src/app/models/userViewModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser-dialog',
  templateUrl: './createuser-dialog.component.html',
  styleUrls: ['./createuser-dialog.component.css']
})
export class CreateuserDialogComponent implements OnInit {

  countries!: countriesViewModel[];
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateuserDialogComponent>,
    private userService: UserServiceService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { 
    this.countries = 
    [{id: 1, description: "Argentina"},
    {id: 2, description: "Costa Rica"},
    {id: 3, description: "Brasil"}]

    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      CorreoElectronico: ['', Validators.email],
      FechaNacimiento: ['', Validators.required],
      Telefono: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cancelAction() {
    this.dialogRef.close();
  }

  createUser() {
    debugger
    const user: UserViewModel = 
      {Nombre: this.form.value.Nombre,
      Apellido: this.form.value.Apellido,
      CorreoElectronico: this.form.value.CorreoElectronico,
      FechaNacimiento: this.form.value.Nombre,
      Telefono: this.form.value.Nombre,
      IdPaisResidencia: 1,
      RecibirInformacion: true};

    this.userService.CreateUser(user).subscribe(u => {
      this._snackBar.open("Creado existosamente");
      this.dialogRef.close();
    });
  }
}