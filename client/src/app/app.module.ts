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
import { TeamComponent } from './team/team/team.component';
import { ChampionshipComponent } from './championship/championship/championship.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'team', component: TeamComponent,
    children: [
      { path: '', component: TeamListComponent },
      { path: 'add', component: TeamAddComponent },
      { path: 'show/:id', component: TeamShowComponent }
    ]
  },
  {
    path: 'championship',
    component: ChampionshipComponent,
    children: [
      { path: '', component: ChampionshipListComponent },
      { path: 'add', component: ChampionshipAddComponent },
      { path: 'show/:id', component: ChampionshipShowComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, DialogContent,
    TeamEditComponent, TeamAddComponent,
    TeamShowComponent, TeamEditComponent,
    TeamAddComponent, TeamListComponent,
    TeamShowComponent, PageNotFoundComponent, ChampionshipShowComponent, ChampionshipEditComponent, ChampionshipAddComponent, ChampionshipListComponent, TeamComponent, ChampionshipComponent
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
