import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-show-players',
  templateUrl: './team-show-players.component.html',
  styleUrls: ['./team-show-players.component.css']
})
export class TeamShowPlayersComponent implements OnInit {

	@Input() players: any[];
  constructor() { }

  ngOnInit() {
  }

}
