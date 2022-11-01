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
  users!: UserDTO[];

  constructor(
    public dialogRef: MatDialogRef<CreateuserDialogComponent>,
    private userService: UserServiceService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.form = this.fb.group({
      Nombre: [data != null ? data.nombre : '', Validators.required],
      Apellido: [data != null ? data.apellido : '', Validators.required],
      CorreoElectronico: [data != null ? data.correoElectronico : '', Validators.email],
      FechaNacimiento: [data != null ? data.fechaNacimiento : '', Validators.required],
      Telefono: [data != null ? data.telefono : '', Validators.required],
      //Pais: [data != null ? data.pais : '', Validators.required],
      RecibirInformacion: [data != null ? data.recibirInformacion : '', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userService.GetCountries().subscribe(c => {
      this.countries = c;
    })
  }

  cancelAction() {
    this.dialogRef.close();
  }

  createUser() {
    debugger;
    const user: UserViewModel = 
      { Id: this.data != null ? this.data.id : null,
        Nombre: this.form.value.Nombre,
        Apellido: this.form.value.Apellido,
        CorreoElectronico: this.form.value.CorreoElectronico,
        FechaNacimiento: this.form.value.FechaNacimiento,
        Telefono: this.form.value.Telefono,
        IdPaisResidencia: 1,
        RecibirInformacion: this.form.value.RecibirInformacion == 1 ? true : false};

    if (this.data != null) {
      this.userService.UpdateUser(user).subscribe({
        next: (e) => {this.createdUserResponse("usuario modificado exitosamente")},
        error: (err) => {this.createdUserResponse("usuario modificado exitosamente")},
        complete: () => console.log("complete")});
    }
    else {
      this.userService.CreateUser(user).subscribe({
        next: (e) => {this.createdUserResponse("usuario creado exitosamente")},
        error: (err) => {this.createdUserResponse("usuario creado exitosamente")},
        complete: () => console.log("complete")});
    }
  }

  createdUserResponse(action: string) {
    this._snackBar.open(action, "X");
    this.dialogRef.close();
    this.userService.GetUsers().subscribe(e => {
      this.users = e;
    });
  }
}