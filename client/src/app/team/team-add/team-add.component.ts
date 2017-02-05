import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team } from '../../team';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {
  team: Team;

  constructor() {
    this.team = {id: 0, name: "", src: "", points: 0};
  }

  ngOnInit() {
  }

  save() {
    console.log("send to service" + this.team.name);
  }
}
