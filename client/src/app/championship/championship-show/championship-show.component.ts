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
  data: Championship;
  current: ChampionshipRow;
  children: TeamChampionshipRow[];
  id: any;
  paramsSub: any;
  myState = 'AL';
  states: TeamChampionshipRow[];

  constructor(private activatedRoute: ActivatedRoute, private dataApi: ChampionshipApi,
              private childrenApi: TeamChampionshipRowApi, private currentRowApi: ChampionshipRowApi, public dialog: MdDialog) {
    this.data = {id: 0, name: "", logoUrl: "", description: ""};
    this.children = [];
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = parseInt(params['id'], 10);
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
        let data = {"team": {id: result}, "championshipRow": {id: self.current.id}, "subDate": new Date()};
        self.childrenApi.create(data).subscribe((data: any) => {
          self.loadData(self.id);
        });
      }
    });
  }

  loadData(id: any): void {
    this.dataApi.findById(id).subscribe((data: Championship) => {
      this.data = data;
      var self = this;
      this.currentRowApi.find({include: {relation: 'championship', scope: { where: { id: id }}} }).subscribe((rows: ChampionshipRow[]) => {
        if(rows.length > 0) {
          self.current = rows[0];
          self.childrenApi.find({include: [{relation: 'championshipRow', scope: { where: {id: self.current.id}}}, {relation: 'team'}]}).subscribe((teams: TeamChampionshipRow[]) => {
            self.children = [];
            teams.forEach(function(row) {
              self.children.push(row);
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
