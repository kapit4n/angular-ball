/* tslint:disable */
import {
  Championship,
  TeamChampionshipRow
} from '../index';

declare var Object: any;
export interface ChampionshipRowInterface {
  "startDate": Date;
  "endDate"?: Date;
  "id"?: any;
  "championshipId"?: any;
  championship?: Championship;
  teamChampionshipRows?: TeamChampionshipRow[];
}

export class ChampionshipRow implements ChampionshipRowInterface {
  "startDate": Date;
  "endDate": Date;
  "id": any;
  "championshipId": any;
  championship: Championship;
  teamChampionshipRows: TeamChampionshipRow[];
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
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "championshipId": {
          name: 'championshipId',
          type: 'any'
        },
      },
      relations: {
        championship: {
          name: 'championship',
          type: 'Championship',
          model: 'Championship'
        },
        teamChampionshipRows: {
          name: 'teamChampionshipRows',
          type: 'TeamChampionshipRow[]',
          model: 'TeamChampionshipRow'
        },
      }
    }
  }
}
