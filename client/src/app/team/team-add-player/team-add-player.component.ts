import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PlayerApi }            from '../../../../sdk/services';
import { LoadListDataInterface } from '../../loadListDataInterface'
import { Player }  from '../../../../sdk/models';

@Component({
  selector: 'app-team-add-player',
  templateUrl: './team-add-player.component.html',
  styleUrls: ['./team-add-player.component.css']
})
export class TeamAddPlayerComponent implements OnInit, LoadListDataInterface {
  data = [];
  constructor(public dialogRef: MatDialogRef<TeamAddPlayerComponent>, private dataApi: PlayerApi) {}

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
    });
  }
}
