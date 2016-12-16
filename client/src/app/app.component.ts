import { Component, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { ChampionshipService } from './championship.service';
import { Championship } from './championship';
import { TeamService } from './team.service';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChampionshipService, TeamService]
})
export class AppComponent {
  title = 'app works!';
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  championships = [];
  teams = [];

  currentChampion = {
                      name: "Champiom",
                      src: "http://www.footballbootsdb.com/logos/leagues/2.png"
                    };

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar,
              private championshipService: ChampionshipService, private teamService: TeamService) {
   
	}

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);
    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
	}

  getChampionships(): void {
    this.championshipService.getChampionships().then(championships => this.championships = championships);
  }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  ngOnInit(): void {
    this.getChampionships();
    this.getTeams();
  }
}


@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}