import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { MatDialog, MatDialogRef } from '@angular/material';
import { TeamAddPlayerComponent } from '../team-add-player/team-add-player.component';
import { TeamPlayerApi }            from '../../../../sdk/services';

@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css'],
  providers: [TeamApi]
})
export class TeamShowComponent implements OnInit, LoadDataInterface {
  data: any;
  id: any;
  paramsSub: any;
  players = [];
  constructor(private activatedRoute: ActivatedRoute, private dataApi : TeamApi,
    public dialog: MatDialog, private teamPlayerApi: TeamPlayerApi) {
    this.data = { name: "", logoUrl: "", description: ""};
    this.players = [];
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Team) => {
        this.data = data;
          this.dataApi.getTeamPlayers(id, {include: {"relation": "player"}}).subscribe((players: any[]) => {
            this.players = players;
          });
      });
  }

  removeChildren(rowId: any): void {
    var self = this;
    this.teamPlayerApi.deleteById(rowId).subscribe((data: any) => {
      self.loadData(self.id);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  openDialogAddPlayer() {
    var self = this;
    let dialogRef:MatDialogRef<TeamAddPlayerComponent> = this.dialog.open(TeamAddPlayerComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = {"teamId": self.id, "playerId": result.id, startDate: "01/01/2017", endDate: "01/01/2018"};
        self.teamPlayerApi.create(data).subscribe((createdResult: any) => {
          self.loadData(self.id);
        });
      }
    });
  }
}
