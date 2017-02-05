import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent, DialogContent } from './app.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamAddComponent } from './team/team-add/team-add.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamShowComponent } from './team/team-show/team-show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChampionshipShowComponent } from './championship/championship-show/championship-show.component';
import { ChampionshipEditComponent } from './championship/championship-edit/championship-edit.component';
import { ChampionshipAddComponent } from './championship/championship-add/championship-add.component';
import { ChampionshipListComponent } from './championship/championship-list/championship-list.component';

const appRoutes: Routes = [
  { path: 'team-add', component: TeamAddComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'championship-list', component: ChampionshipListComponent },
  { path: 'championship-show', component: ChampionshipShowComponent },
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent }
];

const appRoutes2: Routes = [
  { path: 'team-add', component: TeamAddComponent },
  { path: 'team-list', component: TeamListComponent },
];

@NgModule({
  declarations: [
    AppComponent, DialogContent,
    TeamEditComponent, TeamAddComponent,
    TeamShowComponent, TeamEditComponent,
    TeamAddComponent, TeamListComponent,
    TeamShowComponent, PageNotFoundComponent, ChampionshipShowComponent, ChampionshipEditComponent, ChampionshipAddComponent, ChampionshipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
