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

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.GetActivities().subscribe(e => {
      this.dataSource = e;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
