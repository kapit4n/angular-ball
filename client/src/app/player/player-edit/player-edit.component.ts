import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerApi }            from '../../../../sdk/services';
import { Player }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit, LoadDataInterface {

  data: any;
  id: any;
  paramsSub: any;
  constructor(private activatedRoute: ActivatedRoute, private dataApi : PlayerApi, private router: Router) {
    this.data = {name: " ", logoUrl: " ", description: "0"};
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
      this.dataApi.findById(id).subscribe((data: Player) => {
        this.data = data;
      });
  }

  save(): void  {
    this.dataApi.upsert(this.data).subscribe((data: Player) => {
      this.router.navigate(['player/show/' + data.id]);
    });
  }
}
