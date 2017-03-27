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
  states: TeamChampionshipRow[];

  constructor(private activatedRoute: ActivatedRoute, private dataApi: ChampionshipApi,
              private childrenApi: TeamChampionshipRowApi, private currentRowApi: ChampionshipRowApi, public dialog: MdDialog) {
    this.data = {name: "", logoUrl: "", description: ""};
    this.children = [];
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
        let data = {"championshipRowId": self.current.id, "teamId": result, "subDate": new Date()};
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
      this.currentRowApi.find({
                                where: { championship: self.data.id }
                              }).subscribe((rows: any[]) => {
        console.log("rows");
        console.log(rows);
        if(rows.length == 0) {
          self.currentRowApi.create({championship: self.data.id, startDate: new Date(), endDate: new Date()}).subscribe((row: any) => {
            console.log(row);
          });
        } else {
          console.log("This is current");
          console.log(rows);
          self.current = rows[0];
          self.childrenApi.find({where: { championship: self.current.id }}).subscribe((teams: TeamChampionshipRow[]) => {
            self.children = [];
            console.log(teams);
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
