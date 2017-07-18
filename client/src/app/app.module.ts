import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { SDKBrowserModule } from '../../sdk/index';
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
import { ChampionshipAddTeamComponent } from './championship/championship-add-team/championship-add-team.component';
import { MatchAddComponent } from './match/match-add/match-add.component';
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchShowComponent } from './match/match-show/match-show.component';
import { MatchComponent } from './match/match/match.component';
import { MatchAddTeamComponent } from './match/match-add-team/match-add-team.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerShowComponent } from './player/player-show/player-show.component';
import { PlayerComponent } from './player/player/player.component';
import { MatchResultUpdateComponent } from './match/match-result-update/match-result-update.component';
import { TeamAddPlayerComponent } from './team/team-add-player/team-add-player.component';
import { GoalAddComponent } from './match/goal-add/goal-add.component';
import { ChampionshipTeamsComponent } from './championship/championship-teams/championship-teams.component';

const appRoutes: Routes = [
  {
    path: 'match', component: MatchComponent,
    children: [
      { path: '', component: MatchListComponent },
      { path: 'add', component: MatchAddComponent },
      { path: 'show/:id', component: MatchShowComponent },
      { path: 'edit/:id', component: MatchEditComponent },
      { path: 'match-result-update/:id', component: MatchResultUpdateComponent },
      { path: 'goal/add/:id', component: GoalAddComponent }
    ]
  },
  {
    path: 'team', component: TeamComponent,
    children: [
      { path: '', component: TeamListComponent },
      { path: 'add', component: TeamAddComponent },
      { path: 'show/:id', component: TeamShowComponent },
      { path: 'edit/:id', component: TeamEditComponent }
    ]
  },
  {
    path: 'championship',
    component: ChampionshipComponent,
    children: [
      { path: '', component: ChampionshipListComponent },
      { path: 'add', component: ChampionshipAddComponent },
      { path: 'show/:id', component: ChampionshipShowComponent },
      { path: 'edit/:id', component: ChampionshipEditComponent }
    ]
  },
  {
    path: 'player',
    component: PlayerComponent,
    children: [
      { path: '', component: PlayerListComponent },
      { path: 'add', component: PlayerAddComponent },
      { path: 'show/:id', component: PlayerShowComponent },
      { path: 'edit/:id', component: PlayerEditComponent }
    ]
  },
  { path: '**', component: ChampionshipListComponent }
];

@NgModule({
  declarations: [
    AppComponent, DialogContent,
    TeamEditComponent, TeamAddComponent,
    TeamShowComponent, TeamEditComponent,
    TeamAddComponent, TeamListComponent,
    TeamShowComponent, PageNotFoundComponent,
    ChampionshipShowComponent, ChampionshipEditComponent,
    ChampionshipAddComponent, ChampionshipListComponent,
    TeamComponent, ChampionshipComponent,
    ChampionshipAddTeamComponent,
    MatchAddComponent, MatchEditComponent,
    MatchListComponent, MatchShowComponent,
    MatchComponent,
    MatchAddTeamComponent,
    PlayerListComponent,
    PlayerAddComponent,
    PlayerEditComponent,
    PlayerShowComponent,
    PlayerComponent,
    MatchResultUpdateComponent,
    TeamAddPlayerComponent,
    GoalAddComponent,
    ChampionshipTeamsComponent
  ],
  entryComponents: [ChampionshipAddTeamComponent, MatchAddTeamComponent, TeamAddPlayerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
