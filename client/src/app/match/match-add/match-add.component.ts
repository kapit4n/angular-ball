import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchApi }            from '../../../../sdk/services';
import { Match }  from '../../../../sdk/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {
  data: any;
  constructor(private dataApi: MatchApi, private router: Router) {
    this.data = {matchDate: "05/10/2017"};
  }

  ngOnInit() {
  }

  save(): void  {
    this.dataApi.create(this.data).subscribe((data: Match) => {
      this.router.navigate(['match/']);
    });
  }

}
