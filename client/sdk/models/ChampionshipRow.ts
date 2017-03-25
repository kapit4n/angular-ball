/* tslint:disable */
import {
  Championship,
  Team
} from '../index';

declare var Object: any;
export interface ChampionshipRowInterface {
  "startDate": any;
  "endDate": any;
  "id"?: any;
  championship?: Championship;
  teams?: Team[];
}

export class ChampionshipRow implements ChampionshipRowInterface {
  "startDate": any;
  "endDate": any;
  "id": any;
  championship: Championship;
  teams: Team[];
  constructor(data?: ChampionshipRowInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ChampionshipRow`.
   */
  public static getModelName() {
    return "ChampionshipRow";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ChampionshipRow for dynamic purposes.
  **/
  public static factory(data: ChampionshipRowInterface): ChampionshipRow{
    return new ChampionshipRow(data);
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
      name: 'ChampionshipRow',
      plural: 'ChampionshipRows',
      properties: {
        "startDate": {
          name: 'startDate',
          type: 'any'
        },
        "endDate": {
          name: 'endDate',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        championship: {
          name: 'championship',
          type: 'Championship',
          model: 'Championship'
        },
        teams: {
          name: 'teams',
          type: 'Team[]',
          model: 'Team'
        },
      }
    }
  }
}
