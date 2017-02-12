import { Component, OnInit } from '@angular/core';
import { ChampionshipApi }            from '../../../../sdk/services';
import { Championship }  from '../../../../sdk/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-championship-add',
  templateUrl: './championship-add.component.html',
  styleUrls: ['./championship-add.component.css'],
  providers: [ChampionshipApi]
})
export class ChampionshipAddComponent implements OnInit {
  data: Championship;

  constructor(private router: Router, private dataApi : ChampionshipApi) {
    this.data = {id: 0, name: "", logoUrl: "", description: ""};
  }

  ngOnInit() {
  }
  
  save(): void  {
    this.dataApi.create(this.data).subscribe((data: Championship) => {
      this.router.navigate(['championship/']);
    });
  }
}
