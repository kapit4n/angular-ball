import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionshipApi }            from '../../../../sdk/services';
import { Championship }  from '../../../../sdk/models';
import {Router} from '@angular/router';
import { LoadDataInterface } from '../../loadDataInterface'

@Component({
  selector: 'app-championship-edit',
  templateUrl: './championship-edit.component.html',
  styleUrls: ['./championship-edit.component.css']
})
export class ChampionshipEditComponent implements OnInit, LoadDataInterface {
  data: any;
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute, private dataApi : ChampionshipApi, private router: Router) {
    this.data = {name: "", logoUrl: "", description: ""};
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
      this.dataApi.findById(id).subscribe((data: Championship) => {
        this.data = data;
      });
  }

  save(): void  {
    this.dataApi.upsert(this.data).subscribe((data: Championship) => {
      this.router.navigate(['championship/show/' + data.id]);
    });
  }

}
