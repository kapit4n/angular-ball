import { Component, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  championships = [
    {
      name: "Champiom",
      src: "http://www.footballbootsdb.com/logos/leagues/2.png"
    },
    {
      name: "Libertadores",
      src: "https://www.vflnet.com/infos/conmebol/competitions/copa_libertadores/copa_toyota_libertadores.png"
    }
  ];
  teams = [
    {
      name: "Barcelona",
      src: "http://cdn.bleacherreport.net/images/team_logos/64x64/fc_barcelona.png",
      points: 30
    },
    {
      name: "Real Madrid",
      src: "https://d1si3tbndbzwz9.cloudfront.net/soccer/team/44/small_logo.png",
      points: 29
    }
  ];

  currentChampion = {
                      name: "Champiom",
                      src: "http://www.footballbootsdb.com/logos/leagues/2.png"
                    };

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
   
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