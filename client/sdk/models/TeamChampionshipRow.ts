/* tslint:disable */
import {
  ChampionshipRow,
  Team
} from '../index';

declare var Object: any;
export interface TeamChampionshipRowInterface {
  "subDate": any;
  "points": any;
  "id"?: any;
  championshipRow?: ChampionshipRow;
  team?: Team;
}

export class TeamChampionshipRow implements TeamChampionshipRowInterface {
  "subDate": any;
  "points": any;
  "id": any;
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
          type: 'any'
        },
        "points": {
          name: 'points',
          type: 'any',
          default: 0
        },
        "id": {
          name: 'id',
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
