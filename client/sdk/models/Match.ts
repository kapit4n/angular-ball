/* tslint:disable */
import {
  Team
} from '../index';

declare var Object: any;
export interface MatchInterface {
  matchDate: Date;
  teamAGoals?: number;
  teamBGoals?: number;
  winnerTeam?: string;
  id?: number;
  teamA?: Team;
  teamB?: Team;
}

export class Match implements MatchInterface {
  matchDate: Date;
  teamAGoals: number;
  teamBGoals: number;
  winnerTeam: string;
  id: number;
  teamA: Team;
  teamB: Team;
  constructor(data?: MatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Match`.
   */
  public static getModelName() {
    return "Match";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Match for dynamic purposes.
  **/
  public static factory(data: MatchInterface): Match{
    return new Match(data);
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
      name: 'Match',
      plural: 'Matches',
      properties: {
        matchDate: {
          name: 'matchDate',
          type: 'Date'
        },
        teamAGoals: {
          name: 'teamAGoals',
          type: 'number'
        },
        teamBGoals: {
          name: 'teamBGoals',
          type: 'number'
        },
        winnerTeam: {
          name: 'winnerTeam',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        teamA: {
          name: 'teamA',
          type: 'Team',
          model: 'Team'
        },
        teamB: {
          name: 'teamB',
          type: 'Team',
          model: 'Team'
        },
      }
    }
  }
}
