import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipApi }            from '../../../../sdk/services';
import { Championship }  from '../../../../sdk/models';
import {LoadDataInterface} from '../../loadDataInterface'

@Component({
  selector: 'app-championship-show',
  templateUrl: './championship-show.component.html',
  styleUrls: ['./championship-show.component.css'],
  providers: [ChampionshipApi]
})

export class ChampionshipShowComponent implements OnInit, LoadDataInterface {
  data: Championship;
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private dataApi : ChampionshipApi) {
    this.data = {id: 0, name: "Default Name", logoUrl: "test.png", description: "Description"};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = parseInt(params['id'], 10);
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Championship) => {
        this.data = data;
      });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
