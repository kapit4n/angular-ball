import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TeamApi }            from '../../../../sdk/services';
import { LoadListDataInterface } from '../../loadListDataInterface'
import { Team }  from '../../../../sdk/models';
import { MatchListComponent } from './../match-list/match-list.component';

@Component({
  selector: 'app-match-add-team',
  templateUrl: './match-add-team.component.html',
  styleUrls: ['./match-add-team.component.css']
})
export class MatchAddTeamComponent implements OnInit, LoadListDataInterface {
  data = [];
  constructor(public dialogRef: MatDialogRef<MatchAddTeamComponent>, private dataApi: TeamApi) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
    });
  }
}
