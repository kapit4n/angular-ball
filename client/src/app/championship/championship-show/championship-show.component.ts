import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from '../../championship.service';
import { Championship } from '../../championship';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-championship-show',
  templateUrl: './championship-show.component.html',
  styleUrls: ['./championship-show.component.css'],
  providers: [ChampionshipService]
})

export class ChampionshipShowComponent implements OnInit {
  championships = [];
  championship: Championship;
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private championshipService: ChampionshipService) {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    this.championship = {id: 1, name: 'UEFA Champions League', src: 'http://www.footballbootsdb.com/logos/leagues/2.png', teams: []};
  }

  ngOnInit() {
    this.getChampionships();
  }


  getChampionships(): void {
    this.championshipService.getChampionships().then(championships => {
        this.championships = championships;
        for(let i = 0; i < this.championships.length; i++) {
          if (this.championships[i].id == this.id) {
            this.championship = this.championships[i];
          }
        }
      }
      );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
