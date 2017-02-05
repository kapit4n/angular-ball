import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';
import { Team } from '../../team';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  championships = [];
  teams = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  	this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }
}
