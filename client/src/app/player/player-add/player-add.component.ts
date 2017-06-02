import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerApi }            from '../../../../sdk/services';
import { Player }  from '../../../../sdk/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  data: any;
  paramsSub: any;

  constructor(private dataApi: PlayerApi, private router: Router) {
    this.data = { name: " " };
  }

  ngOnInit() {

  }

  save(): void  {
    this.dataApi.create(this.data).subscribe((data: Player) => {
      this.router.navigate(['player/']);
    });
  }

}
