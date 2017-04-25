import { Component, OnInit } from '@angular/core';
import { TeamApi }            from '../../../../sdk/services';
import { TeamService }            from '../../services/teamService';
import { Team }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit, LoadListDataInterface {
  data:Team[] = [];
  errorMessage = ""
  constructor(private dataApi: TeamService) { }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.getTeams().subscribe((data) => {
      this.data = data;
    }, error =>  this.errorMessage = <any>error);
  }

  delete(id: any): void {
    //this.dataApi.deleteById(id).subscribe((data) => {
    //  this.loadData();
    //});
  }
}
