/* tslint:disable */
import {
  Match,
  Team
} from '../index';

declare var Object: any;
export interface TeamMatchInterface {
  "goals": number;
  "id"?: any;
  "matchId"?: any;
  "teamId"?: any;
  match?: Match;
  team?: Team;
}

export class TeamMatch implements TeamMatchInterface {
  "goals": number;
  "id": any;
  "matchId": any;
  "teamId": any;
  match: Match;
  team: Team;
  constructor(data?: TeamMatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TeamMatch`.
   */
  public static getModelName() {
    return "TeamMatch";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TeamMatch for dynamic purposes.
  **/
  public static factory(data: TeamMatchInterface): TeamMatch{
    return new TeamMatch(data);
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
      name: 'TeamMatch',
      plural: 'TeamMatches',
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
        "matchId": {
          name: 'matchId',
          type: 'any'
        },
        "teamId": {
          name: 'teamId',
          type: 'any'
        },
      },
      relations: {
        match: {
          name: 'match',
          type: 'Match',
          model: 'Match'
        },
        team: {
          name: 'team',
          type: 'Team',
          model: 'Team'
        },
      }
    }
  }
}
