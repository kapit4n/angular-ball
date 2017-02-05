import { Component, OnInit } from '@angular/core';
import { Team } from '../../team';
import { ActivatedRoute} from '@angular/router';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css']
})
export class TeamShowComponent implements OnInit {

  team: Team;
  constructor(private route: ActivatedRoute) {
    this.team = {id: 0, name: "RRR", src: "RRR", points: 0};
  }

  ngOnInit() {
  }

}
