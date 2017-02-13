import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipApi, ChampionshipRowApi, TeamChampionshipRowApi }            from '../../../../sdk/services';
import { Championship, Team, TeamChampionshipRow, ChampionshipRow }  from '../../../../sdk/models';
import {LoadDataWithChildrenInterface} from '../../loadDataInterface'

@Component({
  selector: 'app-championship-show',
  templateUrl: './championship-show.component.html',
  styleUrls: ['./championship-show.component.css']
})

export class ChampionshipShowComponent implements OnInit, LoadDataWithChildrenInterface {
  data: Championship;
  current: ChampionshipRow;
  children: Team[];
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private dataApi: ChampionshipApi,
              private childrenApi: TeamChampionshipRowApi, private currentRowApi: ChampionshipRowApi) {
    this.data = {id: 0, name: "", logoUrl: "", description: ""};
    this.children = [];
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = parseInt(params['id'], 10);
        this.loadData(this.id);
        this.loadChildren(this.id);
      }
    );
  }

  loadData(id: any): void {
    this.dataApi.findById(id).subscribe((data: Championship) => {
      this.data = data;
      this.currentRowApi.find({include: {relation:'championship', scope: { where: { id: id }}} }).subscribe((rows: ChampionshipRow[]) => {
        if(rows.length > 0) {
          this.current = rows[0];
          this.childrenApi.find({include: [{relation:'championshipRow', scope: {where: {id: this.current.id}}},'team']}).subscribe((teams: TeamChampionshipRow[]) => {
            teams.forEach(function(row) {
              this.children.push(row.team);// See why is not rendering in the page
            });
          });
        }
      });
    });
  }

  loadChildren(id: any): void {
    this.childrenApi.find({}).subscribe((data: TeamChampionshipRow[]) => {
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
