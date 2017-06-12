/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Team } from '../../models/Team';
import { Player } from '../../models/Player';
import { Championship } from '../../models/Championship';
import { ChampionshipRow } from '../../models/ChampionshipRow';
import { TeamChampionshipRow } from '../../models/TeamChampionshipRow';
import { Match } from '../../models/Match';
import { TeamPlayer } from '../../models/TeamPlayer';
import { TeamMatch } from '../../models/TeamMatch';
import { MatchGoal } from '../../models/MatchGoal';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Team: Team,
    Player: Player,
    Championship: Championship,
    ChampionshipRow: ChampionshipRow,
    TeamChampionshipRow: TeamChampionshipRow,
    Match: Match,
    TeamPlayer: TeamPlayer,
    TeamMatch: TeamMatch,
    MatchGoal: MatchGoal,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
