import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchGoalApi }            from '../../../../sdk/services';
import { MatchApi }            from '../../../../sdk/services';
import { TeamMatchApi }            from '../../../../sdk/services';
import { ChampionshipRowApi }            from '../../../../sdk/services';
import { Match, TeamMatch, MatchGoal }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { MdDialog, MdDialogRef } from '@angular/material';
import { TeamAddPlayerComponent } from '../../team/team-add-player/team-add-player.component';

@Component({
  selector: 'app-goal-add',
  templateUrl: './goal-add.component.html',
  styleUrls: ['./goal-add.component.css']
})
export class GoalAddComponent implements OnInit, LoadDataInterface {
  id: any;
  matchId: any;
  match: any;
  paramsSub: any;
  matchGoal: any;
  championship: any;
  player: any;
  constructor(private activatedRoute: ActivatedRoute, private dataApi : MatchGoalApi,
    public dialog: MdDialog, private teamMatchApi: TeamMatchApi, private matchGoalApi: MatchGoalApi,
    private championshipRowApi: ChampionshipRowApi) {
    this.match = { matchDate: "12/12/2017", id: ""};
    this.championship =  { id: "1", name: "name"};
    this.matchGoal = { id: "1", goalMinute: "2"};
    this.player = {avatarUrl: "url", biography: "a", id: "1", name: " Messi"};

    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.matchId = params['id'];
      var self = this;
      let dataAux = {"matchId": this.matchId, "goalMinute": "2", goalTime: "12/12/2017"};
      self.dataApi.create(dataAux).subscribe((matchGoal: any) => {
          console.log(matchGoal);
          self.loadData(matchGoal.id);
        });
      }
    );
  }

  openDialogAddPlayer() {
    var self = this;
    let dialogRef:MdDialogRef<TeamAddPlayerComponent> = this.dialog.open(TeamAddPlayerComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        let matchGoalAux = {id: self.matchGoal.id, playerId: result.id, goalTime: "12/12/2017", goalMinute: self.matchGoal.goalMinute}
        self.matchGoalApi.upsert(matchGoalAux).subscribe((matchGoal: any) => {
          self.loadData(matchGoal.id);
        });
      }
    });
  }

  loadData(id: any): void {
      this.dataApi.findById(id, {include: {"relation": "match"}}).subscribe((data: MatchGoal) => {
        this.matchGoal = data;
        this.championshipRowApi.getChampionship(data.match.championshipRowId, {include: {"relation": "championship"}}).subscribe((championship: any) => {
          this.championship = championship;
        });
        
        this.dataApi.getPlayer(data.id).subscribe((player: any) => {
          console.log(player);
          if (player) {
            this.player = player;
          }
        });

        var self = this;
      });
  }

  removePlayer(rowId: any): void {
    var self = this;
    this.teamMatchApi.deleteById(rowId).subscribe((data: any) => {
      self.loadData(self.id);
    });
  }

  save(): void  {
    this.dataApi.upsert(this.matchGoal).subscribe((data: MatchGoal) => {
      // show success message in the browser
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
