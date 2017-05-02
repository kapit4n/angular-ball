/* tslint:disable */
import {
  ChampionshipRow,
  Team
} from '../index';

declare var Object: any;
export interface TeamChampionshipRowInterface {
  "subDate": Date;
  "points": number;
  "id"?: any;
  "championshipRowId"?: any;
  "teamId"?: any;
  championshipRow?: ChampionshipRow;
  team?: Team;
}

export class TeamChampionshipRow implements TeamChampionshipRowInterface {
  "subDate": Date;
  "points": number;
  "id": any;
  "championshipRowId": any;
  "teamId": any;
  championshipRow: ChampionshipRow;
  team: Team;
  constructor(data?: TeamChampionshipRowInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TeamChampionshipRow`.
   */
  public static getModelName() {
    return "TeamChampionshipRow";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TeamChampionshipRow for dynamic purposes.
  **/
  public static factory(data: TeamChampionshipRowInterface): TeamChampionshipRow{
    return new TeamChampionshipRow(data);
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
      name: 'TeamChampionshipRow',
      plural: 'TeamChampionshipRows',
      properties: {
        "subDate": {
          name: 'subDate',
          type: 'Date'
        },
        "points": {
          name: 'points',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "championshipRowId": {
          name: 'championshipRowId',
          type: 'any'
        },
        "teamId": {
          name: 'teamId',
          type: 'any'
        },
      },
      relations: {
        championshipRow: {
          name: 'championshipRow',
          type: 'ChampionshipRow',
          model: 'ChampionshipRow'
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
