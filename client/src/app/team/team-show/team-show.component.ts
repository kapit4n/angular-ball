import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'

@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css'],
  providers: [TeamApi]
})
export class TeamShowComponent implements OnInit, LoadDataInterface {
  data: Team;
  id: any;
  paramsSub: any;
  teams = [];
  constructor(private activatedRoute: ActivatedRoute, private dataApi : TeamApi) {
    this.data = {id: 0, name: "RRR", logoUrl: "RRR", description: "Des"};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = parseInt(params['id'], 10);
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Team) => {
        this.data = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }


}
