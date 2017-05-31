import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchApi }            from '../../../../sdk/services';
import { TeamMatchApi }            from '../../../../sdk/services';
import { Match, TeamMatch }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { MdDialog, MdDialogRef } from '@angular/material';
import { MatchAddTeamComponent } from '../match-add-team/match-add-team.component';

@Component({
  selector: 'app-match-show',
  templateUrl: './match-show.component.html',
  styleUrls: ['./match-show.component.css'],
  providers: [MatchApi]
})
export class MatchShowComponent implements OnInit, LoadDataInterface {
  data: any;
  id: any;
  paramsSub: any;
  current: any;
  teamA: {id: "2", goals: "2"};
  teamB: {id: "2", goals: "2"};
  constructor(private activatedRoute: ActivatedRoute, private dataApi : MatchApi,
    public dialog: MdDialog, private teamMatchApi: TeamMatchApi) {
    this.data = { matchDate: "12/12/2017"};
    this.teamA = {id: "2", goals: "2"};
    this.teamB = {id: "2", goals: "2"};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  openDialogAddLocalTeam() {
    var self = this;
    let dialogRef:MdDialogRef<MatchAddTeamComponent> = this.dialog.open(MatchAddTeamComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = {"matchId": self.id, "teamId": result.id, "goals": "10"};
        self.teamMatchApi.create(data).subscribe((www: any) => {
          self.loadData(self.id);
        });
      }
    });
  }

  openDialogVisitorTeam() {
    var self = this;
    let dialogRef:MdDialogRef<MatchAddTeamComponent> = this.dialog.open(MatchAddTeamComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = {"matchId": self.id, "teamId": result.id, "goals": "10"};
        self.teamMatchApi.create(data).subscribe((www: any) => {
          self.loadData(self.id);
        });
      }
    });
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Match) => {
        this.data = data;
        var self = this;

        this.dataApi.getTeamMatches(self.id).subscribe((rows: Array<any>) => {
          console.log(rows);
          if (rows.length > 0) {
            self.teamA = rows[0];
          }
          if (rows.length > 1) {
            self.teamB = rows[1];
          }
        });
      });
  }

  removeLocalTeam(rowId: any): void {
    var self = this;
    this.teamMatchApi.deleteById(rowId).subscribe((data: any) => {
      self.loadData(self.id);
    });
  }

  removeVisitorTeam(rowId: any): void {
    var self = this;
    this.teamMatchApi.deleteById(rowId).subscribe((data: any) => {
      self.loadData(self.id);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
