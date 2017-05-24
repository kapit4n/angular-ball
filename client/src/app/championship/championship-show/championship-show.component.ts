import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipApi, ChampionshipRowApi, TeamChampionshipRowApi }            from '../../../../sdk/services';
import { Championship, Team, TeamChampionshipRow, ChampionshipRow }  from '../../../../sdk/models';
import { LoadDataWithChildrenInterface } from '../../loadDataInterface'
import { MdDialog, MdDialogRef } from '@angular/material';
import { ChampionshipAddTeamComponent } from './../championship-add-team/championship-add-team.component';

@Component({
  selector: 'app-championship-show',
  templateUrl: './championship-show.component.html',
  styleUrls: ['./championship-show.component.css'],
  entryComponents: [ChampionshipAddTeamComponent]
})
export class ChampionshipShowComponent implements OnInit, LoadDataWithChildrenInterface {
  data: any;
  current: any;
  children: any[];
  id: any;
  paramsSub: any;
  myState = 'AL';
  teamsAssigned = {};
  states: TeamChampionshipRow[];

  constructor(private activatedRoute: ActivatedRoute, private dataApi: ChampionshipApi,
              private childrenApi: TeamChampionshipRowApi, private currentRowApi: ChampionshipRowApi, public dialog: MdDialog) {
    this.data = {name: "", logoUrl: "", description: ""};
    this.children = [];
    this.current = {id : "1"}
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
        this.loadChildren(this.id);
      }
    );
  }

  openDialog() {
    var self = this;
    let dialogRef:MdDialogRef<ChampionshipAddTeamComponent> = this.dialog.open(ChampionshipAddTeamComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = {"championshipRowId": self.current.id, "teamId": result.id, "subDate": new Date(), "points": "10"};
        self.childrenApi.create(data).subscribe((www: any) => {
          self.loadData(self.id);
        });
      }
    });
  }

  loadData(id: any): void {
    this.dataApi.findById(id).subscribe((data: Championship) => {
      this.data = data;
      var self = this;
      this.dataApi.getChampionshipRows(self.id).subscribe((rows: Array<ChampionshipRow>) => {
        if(rows.length == 0) {
          self.dataApi.createChampionshipRows(self.id, {startDate: new Date(), endDate: new Date()}).subscribe((row: ChampionshipRow) => {
            self.current = row;
          });
        } else {
          for (let entry of rows) {
              self.current = entry;
              self.currentRowApi.getTeamChampionshipRows(self.current.id, {include: {"relation": "team"}, order: ['points DESC']}).subscribe((teams: TeamChampionshipRow[]) => {
                self.children = teams;
              });
              break;
          }
        }
      });
    });
  }

  loadChildren(id: any): void {
    this.childrenApi.find({}).subscribe((data: TeamChampionshipRow[]) => {
    });
  }

  removeChildren(rowId: any): void {
    var self = this;
    this.childrenApi.deleteById(rowId).subscribe((data: any) => {
      self.loadData(self.id);
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
