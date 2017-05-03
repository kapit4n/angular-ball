/* tslint:disable */
import {
  Team,
  Match
} from '../index';

declare var Object: any;
export interface Team-matchInterface {
  "goals"?: number;
  "id"?: any;
  "teamId"?: any;
  "matchId"?: any;
  team?: Team;
  match?: Match;
}

export class Team-match implements Team-matchInterface {
  "goals": number;
  "id": any;
  "teamId": any;
  "matchId": any;
  team: Team;
  match: Match;
  constructor(data?: Team-matchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Team-match`.
   */
  public static getModelName() {
    return "Team-match";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Team-match for dynamic purposes.
  **/
  public static factory(data: Team-matchInterface): Team-match{
    return new Team-match(data);
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
      name: 'Team-match',
      plural: 'Team-matches',
      properties: {
        "goals": {
          name: 'goals',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "teamId": {
          name: 'teamId',
          type: 'any'
        },
        "matchId": {
          name: 'matchId',
          type: 'any'
        },
      },
      relations: {
        team: {
          name: 'team',
          type: 'Team',
          model: 'Team'
        },
        match: {
          name: 'match',
          type: 'Match',
          model: 'Match'
        },
      }
    }
  }
}
