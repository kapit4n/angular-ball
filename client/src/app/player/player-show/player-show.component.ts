import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerApi }            from '../../../../sdk/services';
import { Player }  from '../../../../sdk/models';
import { LoadDataInterface } from '../../loadDataInterface'

@Component({
  selector: 'app-player-show',
  templateUrl: './player-show.component.html',
  styleUrls: ['./player-show.component.css']
})
export class PlayerShowComponent implements OnInit , LoadDataInterface {
  data: any;
  id: any;
  paramsSub: any;
  teams = [];
  constructor(private activatedRoute: ActivatedRoute, private dataApi : PlayerApi) {
    this.data = { name: "", avatarUrl: "", biography: ""};
    this.paramsSub = this.activatedRoute.params.subscribe(params => { 
        this.id = params['id'];
        this.loadData(this.id);
      }
    );
  }

  loadData(id: any): void {
      this.dataApi.findById(id).subscribe((data: Player) => {
        this.data = data;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
