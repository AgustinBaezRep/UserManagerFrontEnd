import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { activityDTO } from 'src/app/models/activityDTO';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fechaActividad', 'nombreUsuario', 'detalleActividad'];
  dataSource = new MatTableDataSource<activityDTO[]>;
  @ViewChild(MatSort) sort!: MatSort;
  noActivities: boolean = false;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activityService.GetActivities().subscribe({
      next: (e) => { this.dataSource = e; },
      error: () => {this.noActivities = true},
      complete: () => console.log("complete")});
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
