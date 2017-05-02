/* tslint:disable */
import {
  TeamChampionshipRow,
  Match,
  TeamPlayer
} from '../index';

declare var Object: any;
export interface TeamInterface {
  "name": string;
  "logoUrl"?: string;
  "description": string;
  "id"?: any;
  teamChampionshipRows?: TeamChampionshipRow[];
  matches?: Match[];
  teamPlayers?: TeamPlayer[];
}

export class Team implements TeamInterface {
  "name": string;
  "logoUrl": string;
  "description": string;
  "id": any;
  teamChampionshipRows: TeamChampionshipRow[];
  matches: Match[];
  teamPlayers: TeamPlayer[];
  constructor(data?: TeamInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Team`.
   */
  public static getModelName() {
    return "Team";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Team for dynamic purposes.
  **/
  public static factory(data: TeamInterface): Team{
    return new Team(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Team',
      plural: 'Teams',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "logoUrl": {
          name: 'logoUrl',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        teamChampionshipRows: {
          name: 'teamChampionshipRows',
          type: 'TeamChampionshipRow[]',
          model: 'TeamChampionshipRow'
        },
        matches: {
          name: 'matches',
          type: 'Match[]',
          model: 'Match'
        },
        teamPlayers: {
          name: 'teamPlayers',
          type: 'TeamPlayer[]',
          model: 'TeamPlayer'
        },
      }
    }
  }
}
