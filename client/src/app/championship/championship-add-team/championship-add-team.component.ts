import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TeamApi }            from '../../../../sdk/services';
import { LoadListDataInterface } from '../../loadListDataInterface'
import { Team }  from '../../../../sdk/models';
import { ChampionshipListComponent } from './../championship-list/championship-list.component';

@Component({
  selector: 'app-championship-add-team',
  templateUrl: './championship-add-team.component.html',
  styleUrls: ['./championship-add-team.component.css']
})
export class ChampionshipAddTeamComponent implements OnInit, LoadListDataInterface {
  data = [];
  constructor(public dialogRef: MdDialogRef<ChampionshipAddTeamComponent>, private dataApi: TeamApi) {}

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
    });
  }
}
