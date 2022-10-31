import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivitiesComponent } from './components/user-activities/user-activities.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: UserListComponent},
  {path: "activities", component: UserActivitiesComponent},
  {path: "**", component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
