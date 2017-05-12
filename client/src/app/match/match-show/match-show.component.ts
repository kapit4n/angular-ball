import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchApi }            from '../../../../sdk/services';
import { Match }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'

@Component({
  selector: 'app-match-show',
  templateUrl: './match-show.component.html',
  styleUrls: ['./match-show.component.css'],
  providers: [MatchApi]
})
export class MatchShowComponent implements OnInit, LoadDataInterface {
  data: any;
  id: any;
  paramsSub: any;
  teams = [];
  constructor(private activatedRoute: ActivatedRoute, private dataApi : MatchApi) {
    this.data = { name: "RRR", logoUrl: "RRR", description: "Des"};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Match) => {
        this.data = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
