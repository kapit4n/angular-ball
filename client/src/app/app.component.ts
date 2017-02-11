import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { ChampionshipService } from './championship.service';
import { Championship } from './championship';
import { TeamService } from './team.service';
import { TeamAddComponent } from './team/team-add/team-add.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { Team } from './team';
import { LoopBackConfig } from '../../sdk/index';
import { User, AccessToken }  from '../../sdk/models';
import { UserApi }            from '../../sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChampionshipService, TeamService, UserApi]
})
export class AppComponent {
  title = 'app works!';
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  championships = [];
  teams = [];
  user: User = new User();

  currentChampion: Championship;

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar,
              private championshipService: ChampionshipService, private teamService: TeamService,
              private userApi: UserApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');

     this.currentChampion = {id: 1, name: 'UEFA Champions League', src: 'http://www.footballbootsdb.com/logos/leagues/2.png', teams: []};
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
    this.championshipService.getChampionships().then(championships => {
        this.championships = championships;
        if (this.championships.length > 0) {
          this.currentChampion = this.championships[0];          
        }
      }
      );
  }

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  ngOnInit(): void {
    this.getChampionships();
    this.getTeams();
  }

  changeChampionship(event, championshipId: number) {
    for(let i = 0; i < this.championships.length; i++) {
      if (this.championships[i].id == championshipId) {
        this.currentChampion = this.championships[i];
      }
    }
  }

  signup(): void {
      this.userApi.create(this.user).subscribe((user: User) => this.signin());
  }

  signin(): void {
      this.userApi.login(this.user).subscribe((token: AccessToken) => alert('Fake Redirect'));
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