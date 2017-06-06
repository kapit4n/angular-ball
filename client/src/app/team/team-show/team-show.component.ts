import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { MdDialog, MdDialogRef } from '@angular/material';
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
  teams = [];
  constructor(private activatedRoute: ActivatedRoute, private dataApi : TeamApi,
    public dialog: MdDialog, private teamPlayerApi: TeamPlayerApi) {
    this.data = { name: "", logoUrl: "", description: ""};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Team) => {
        this.data = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  openDialogAddPlayer() {
    var self = this;
    let dialogRef:MdDialogRef<TeamAddPlayerComponent> = this.dialog.open(TeamAddPlayerComponent, {height: '400px', width: '700px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let data = {"teamId": self.id, "playerId": result.id};
        self.teamPlayerApi.create(data).subscribe((createdResult: any) => {
          self.loadData(self.id);
        });
      }
    });
  }
}
