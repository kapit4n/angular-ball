import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamMatchApi }            from '../../../../sdk/services';
import { TeamMatch }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-result-update',
  templateUrl: './match-result-update.component.html',
  styleUrls: ['./match-result-update.component.css']
})
export class MatchResultUpdateComponent implements OnInit, LoadDataInterface {

  data: any;
  id: any;
  paramsSub: any;
  constructor(private activatedRoute: ActivatedRoute, private dataApi : TeamMatchApi, private router: Router) {
    this.data = {goals: " ", match: {id: "1"}, team:{name: " ", logoUrl: " "}};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  loadData(id: any): void {
      this.dataApi.findById(id, {include: [{"relation": "match"}, {"relation": "team"}]}).subscribe((data: TeamMatch) => {
        this.data = data;
      });
  }

  save(): void  {
  	console.log(this.data);
    this.dataApi.upsert({id: this.data.id, goals: this.data.goals}).subscribe((data: TeamMatch) => {
      this.router.navigate(['match/show/' + this.data.match.id]);
    });
  }
}
