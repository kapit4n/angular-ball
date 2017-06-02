import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchApi }            from '../../../../sdk/services';
import { Match }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit, LoadDataInterface {

  data: any;
  id: any;
  paramsSub: any;
  constructor(private activatedRoute: ActivatedRoute, private dataApi : MatchApi, private router: Router) {
    this.data = {matchDate: " "};
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
      this.dataApi.findById(id).subscribe((data: Match) => {
        this.data = data;
      });
  }

  save(): void  {
    this.dataApi.upsert(this.data).subscribe((data: Match) => {
      this.router.navigate(['match/show/' + data.id]);
    });
  }
}
