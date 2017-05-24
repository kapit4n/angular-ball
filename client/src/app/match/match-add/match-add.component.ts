import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchApi }            from '../../../../sdk/services';
import { Match }  from '../../../../sdk/models';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {
  data: any;
  paramsSub: any;
  championshipRowId: any;

  constructor(private activatedRoute: ActivatedRoute, private dataApi: MatchApi, private router: Router) {
    let chamId = "1";
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.championshipRowId = params['championshipRowId'];
        this.data = {matchDate: "05/10/2017", championshipRowId: this.championshipRowId};
      }
    );
  }

  ngOnInit() {

  }

  save(): void  {
    this.dataApi.create(this.data).subscribe((data: Match) => {
      this.router.navigate(['match/']);
    });
  }

}
