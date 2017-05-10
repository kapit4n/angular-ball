import { Component, OnInit } from '@angular/core';
import { ChampionshipApi }            from '../../../../sdk/services';
import { Championship }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css'],
  providers: [ChampionshipApi]
})
export class ChampionshipListComponent implements OnInit, LoadListDataInterface {
	data = [];
  
  constructor(private dataApi : ChampionshipApi) {
    
  }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
    });
  }

  delete(id: any): void {
    this.dataApi.deleteById(id).subscribe((data) => {
      this.loadData();
    });
  }
}
