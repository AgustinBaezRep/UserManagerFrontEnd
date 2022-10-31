import { Component, OnInit } from '@angular/core';
import { activityDTO } from 'src/app/models/activityDTO';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-user-activities',
  templateUrl: './user-activities.component.html',
  styleUrls: ['./user-activities.component.css']
})
export class UserActivitiesComponent implements OnInit {

  displayedColumns: string[] = ['FechaCreacion', 'Usuario', 'Descripcion'];
  dataSource!: activityDTO[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.GetActivities().subscribe(e => {
      this.dataSource = e;
    });
  }

}
