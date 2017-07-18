import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-championship-teams',
  templateUrl: './championship-teams.component.html',
  styleUrls: ['./championship-teams.component.css']
})
export class ChampionshipTeamsComponent implements OnInit {

	@Input() teams: any[];
  constructor() { }

  ngOnInit() {
  }

}
