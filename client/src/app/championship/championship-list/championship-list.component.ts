import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../championship.service';
import { Championship } from '../../championship';

@Component({
  selector: 'app-championship-list',
  templateUrl: './championship-list.component.html',
  styleUrls: ['./championship-list.component.css'],
  providers: [ChampionshipService]
})
export class ChampionshipListComponent implements OnInit {
	championships = [];
  constructor(private championshipService: ChampionshipService) { }

  ngOnInit() {
  	this.getChampionships();
  }

  getChampionships(): void {
    this.championshipService.getChampionships().then(championships => {
        this.championships = championships;
      }
      );
  }
}
