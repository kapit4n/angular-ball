/* tslint:disable */

declare var Object: any;
export interface TeamChampionshipRowInterface {
  "subDate": any;
  "points": any;
  "team": any;
  "championshipRow": any;
  "id"?: any;
}

export class TeamChampionshipRow implements TeamChampionshipRowInterface {
  "subDate": any;
  "points": any;
  "team": any;
  "championshipRow": any;
  "id": any;
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
        "team": {
          name: 'team',
          type: 'any'
        },
        "championshipRow": {
          name: 'championshipRow',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
