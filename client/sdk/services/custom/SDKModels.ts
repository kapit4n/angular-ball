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

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Team: Team,
    Player: Player,
    Championship: Championship,
    ChampionshipRow: ChampionshipRow,
    TeamChampionshipRow: TeamChampionshipRow,
    Match: Match,
    TeamPlayer: TeamPlayer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
