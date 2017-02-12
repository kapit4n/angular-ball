import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../championship.service';
//import { Championship } from '../../championship';
import { ChampionshipApi }            from '../../../../sdk/services';
import { Championship }  from '../../../../sdk/models';
import {LoadListDataInterface} from '../../loadListDataInterface'

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css'],
  providers: [ChampionshipService, ChampionshipApi]
})
export class ChampionshipListComponent implements OnInit, LoadListDataInterface {
	data = [];
  
  constructor(private championshipService: ChampionshipService, private dataApi : ChampionshipApi) {
    
  }

  ngOnInit() {
  	this.loadData();
  }

  loadData(): void {
    this.dataApi.find({}).subscribe((data) => {
      this.data = data;
      console.log("This is the data " + data); 
      console.log(data); 
    });
  }
}
