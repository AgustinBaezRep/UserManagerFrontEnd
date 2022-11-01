import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserActivitiesComponent } from './components/user-activities/user-activities.component';
import { CreateuserDialogComponent } from './components/createuser-dialog/createuser-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    UserActivitiesComponent,
    CreateuserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
