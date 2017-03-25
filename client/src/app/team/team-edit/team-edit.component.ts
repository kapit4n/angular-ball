import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit, LoadDataInterface {

  data: any;
  id: any;
  paramsSub: any;
  constructor(private activatedRoute: ActivatedRoute, private dataApi : TeamApi, private router: Router) {
    this.data = {name: "RRR", logoUrl: "RRR", description: "0"};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = parseInt(params['id'], 10);
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
      this.dataApi.findById(id).subscribe((data: Team) => {
        this.data = data;
      });
  }

  save(): void  {
    this.dataApi.upsert(this.data).subscribe((data: Team) => {
      this.router.navigate(['team/show/' + data.id]);
    });
  }
}
