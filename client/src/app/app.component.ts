import { Component, Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { TeamAddComponent } from './team/team-add/team-add.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { LoopBackConfig } from '../../sdk/index';
import { User, AccessToken, Team }  from '../../sdk/models';
import { UserApi, TeamApi }            from '../../sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserApi, TeamApi]
})
export class AppComponent {
  title = 'app works!';
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  user: User = new User();

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar,
              private userApi: UserApi, private teamApi : TeamApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
    this.user = new User();
    this.user.email = "admin@gmail.com";
    this.user.password = "admin";
    this.signin();
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

  ngOnInit(): void {
  }

  signup(): void {
      this.userApi.create(this.user).subscribe((user: User) => this.signin());
  }

  signin(): void {
      this.userApi.login(this.user).subscribe((token: AccessToken) => { 
        console.log("This is the login access");
      });
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