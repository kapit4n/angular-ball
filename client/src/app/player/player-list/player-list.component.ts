import { Component, OnInit } from '@angular/core';
import { PlayerApi }            from '../../../../sdk/services';
import { Player }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, LoadListDataInterface {
  data:Player[] = [];
  errorMessage = ""
  constructor(private dataApi: PlayerApi) { }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data: Player[]) => {
      this.data = data;
    });
  }

  delete(id: any): void {
    this.dataApi.deleteById(id).subscribe((data) => {
      this.loadData();
    });
  }
}
