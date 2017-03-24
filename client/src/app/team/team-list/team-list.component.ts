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
      console.log(data);
    });
  }

  delete(id: any): void {
    this.dataApi.deleteById(id).subscribe((data) => {
      this.loadData();
    });
  }
}
