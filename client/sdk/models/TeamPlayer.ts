/* tslint:disable */

declare var Object: any;
export interface TeamPlayerInterface {
  "startDate": Date;
  "endDate": Date;
  "team": string;
  "player": string;
  "id"?: any;
  "teamId"?: any;
}

export class TeamPlayer implements TeamPlayerInterface {
  "startDate": Date;
  "endDate": Date;
  "team": string;
  "player": string;
  "id": any;
  "teamId": any;
  constructor(data?: TeamPlayerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TeamPlayer`.
   */
  public static getModelName() {
    return "TeamPlayer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TeamPlayer for dynamic purposes.
  **/
  public static factory(data: TeamPlayerInterface): TeamPlayer{
    return new TeamPlayer(data);
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
      name: 'TeamPlayer',
      plural: 'TeamPlayers',
      properties: {
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "team": {
          name: 'team',
          type: 'string'
        },
        "player": {
          name: 'player',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "teamId": {
          name: 'teamId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
