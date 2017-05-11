import { Component, OnInit } from '@angular/core';
import { MatchApi }            from '../../../../sdk/services';
import { Match }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, LoadListDataInterface {
  data:Match[] = [];
  errorMessage = ""
  constructor(private dataApi: MatchApi) { }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data: Match[]) => {
      this.data = data;
    });
  }

  delete(id: any): void {
    this.dataApi.deleteById(id).subscribe((data) => {
      this.loadData();
    });
  }
}
