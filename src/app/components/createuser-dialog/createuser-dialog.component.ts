import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { countriesViewModel } from 'src/app/models/countriesViewModel';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserViewModel } from 'src/app/models/userViewModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/userDTO';

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
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.countries = 
    [{id: 1, description: "Argentina"},
    {id: 2, description: "Costa Rica"},
    {id: 3, description: "Brasil"}]

    this.form = this.fb.group({
      Nombre: [data != null ? data.nombre : '', Validators.required],
      Apellido: [data != null ? data.apellido : '', Validators.required],
      CorreoElectronico: [data != null ? data.correoElectronico : '', Validators.email],
      FechaNacimiento: [data != null ? data.fechaNacimiento : '', Validators.required],
      Telefono: [data != null ? data.telefono : '', Validators.required],
      RecibirInformacion: [data != null ? data.recibirInformacion : '', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cancelAction() {
    this.dialogRef.close();
  }

  updateUser() {

  }

  createUser() {
    const user: UserViewModel = 
      {Nombre: this.form.value.Nombre,
      Apellido: this.form.value.Apellido,
      CorreoElectronico: this.form.value.CorreoElectronico,
      FechaNacimiento: this.form.value.FechaNacimiento,
      Telefono: this.form.value.Telefono,
      IdPaisResidencia: 1,
      RecibirInformacion: this.form.value.RecibirInformacion == 1 ? true : false};

    this.userService.CreateUser(user).subscribe();
  }
}