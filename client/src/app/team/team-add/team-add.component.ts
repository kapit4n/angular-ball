import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {
  name: string;
  description: string;
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log("send to service" + this.name);
  }

}
