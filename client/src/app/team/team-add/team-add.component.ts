import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamApi }            from '../../../../sdk/services';
import { Team }  from '../../../../sdk/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {
  data: any;

  constructor(private dataApi: TeamApi, private router: Router) {
    this.data = {name: "", logoUrl: "", description: ""};
  }

  ngOnInit() {
  }

  save(): void  {
    this.dataApi.create(this.data).subscribe((data: Team) => {
      this.router.navigate(['team/']);
    });
  }
}
