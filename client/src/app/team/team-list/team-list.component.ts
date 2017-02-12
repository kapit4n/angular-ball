import { Component, OnInit } from '@angular/core';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, LoadListDataInterface {
  data = [];

  constructor(private dataApi: TeamApi) { }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
    });
  }
}
