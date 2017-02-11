/* tslint:disable */
import {
  Championship
} from '../index';

declare var Object: any;
export interface ChampionshipRowInterface {
  startDate: Date;
  endDate: Date;
  id?: number;
  championship?: Championship;
}

export class ChampionshipRow implements ChampionshipRowInterface {
  startDate: Date;
  endDate: Date;
  id: number;
  championship: Championship;
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
        startDate: {
          name: 'startDate',
          type: 'Date'
        },
        endDate: {
          name: 'endDate',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        championship: {
          name: 'championship',
          type: 'Championship',
          model: 'Championship'
        },
      }
    }
  }
}
