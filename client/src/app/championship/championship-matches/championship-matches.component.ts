import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-championship-matches',
  templateUrl: './championship-matches.component.html',
  styleUrls: ['./championship-matches.component.css']
})
export class ChampionshipMatchesComponent implements OnInit {
	
	@Input() matches: any[];
	@Input() current: any;
  constructor() { }

  ngOnInit() {
  }

}
