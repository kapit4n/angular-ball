/* tslint:disable */
import {
  ChampionshipRow,
  TeamMatch
} from '../index';

declare var Object: any;
export interface MatchInterface {
  "matchDate": Date;
  "id"?: any;
  "championshipRowId"?: any;
  championshipRow?: ChampionshipRow;
  teamMatches?: TeamMatch[];
}

export class Match implements MatchInterface {
  "matchDate": Date;
  "id": any;
  "championshipRowId": any;
  championshipRow: ChampionshipRow;
  teamMatches: TeamMatch[];
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
        "matchDate": {
          name: 'matchDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "championshipRowId": {
          name: 'championshipRowId',
          type: 'any'
        },
      },
      relations: {
        championshipRow: {
          name: 'championshipRow',
          type: 'ChampionshipRow',
          model: 'ChampionshipRow'
        },
        teamMatches: {
          name: 'teamMatches',
          type: 'TeamMatch[]',
          model: 'TeamMatch'
        },
      }
    }
  }
}
