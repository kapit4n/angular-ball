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
  team: Team;

  constructor(private dataApi: TeamApi, private router: Router) {
    this.team = {id: 0, name: "", logoUrl: "", description: ""};
  }

  ngOnInit() {
  }

  save(): void  {
    this.dataApi.create(this.team).subscribe((data: Team) => {
      this.router.navigate(['team/']);
    });
  }
}
