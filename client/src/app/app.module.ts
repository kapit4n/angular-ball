import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent, DialogContent } from './app.component';
import { TeamRegisterComponent } from './team-register/team-register.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamViewComponent } from './team-view/team-view.component';

@NgModule({
  declarations: [
    AppComponent, DialogContent, TeamRegisterComponent, TeamEditComponent, TeamViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
