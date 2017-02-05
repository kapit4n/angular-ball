import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../championship.service';
import { Championship } from '../../championship';


@Component({
  selector: 'app-championship-show',
  templateUrl: './championship-show.component.html',
  styleUrls: ['./championship-show.component.css'],
  providers: [ChampionshipService]
})
export class ChampionshipShowComponent implements OnInit {
  championships = [];
	currentChampion: Championship;


  constructor(private championshipService: ChampionshipService) { 
  this.currentChampion = {id: 1, name: 'UEFA Champions League', src: 'http://www.footballbootsdb.com/logos/leagues/2.png', teams: []};

  }

  ngOnInit() {
    this.getChampionships();
  }


  getChampionships(): void {
    this.championshipService.getChampionships().then(championships => {
        this.championships = championships;
        if (this.championships.length > 0) {
          this.currentChampion = this.championships[0];          
        }
      }
      );
  }

}
