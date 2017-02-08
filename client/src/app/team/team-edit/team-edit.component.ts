import { Component, OnInit } from '@angular/core';
import { Team } from '../../team';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  team: Team;
  id: any;
  paramsSub: any;
  teams = [];
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) {
    this.team = {id: 0, name: "RRR", src: "RRR", points: 0};
  }


  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    this.getTeam();
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  getTeam(): void {
    this.teamService.getTeams().then(teams => {
        this.teams = teams;
        for(let i = 0; i < this.teams.length; i++) {
          if (this.teams[i].id == this.id) {
            this.team = this.teams[i];
          }
        }
      } );
  }
}
