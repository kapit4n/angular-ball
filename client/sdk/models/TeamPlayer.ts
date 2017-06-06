/* tslint:disable */
import {
  Player,
  Team
} from '../index';

declare var Object: any;
export interface TeamPlayerInterface {
  "startDate": Date;
  "endDate": Date;
  "id"?: any;
  "playerId"?: any;
  "teamId"?: any;
  player?: Player;
  team?: Team;
}

export class TeamPlayer implements TeamPlayerInterface {
  "startDate": Date;
  "endDate": Date;
  "id": any;
  "playerId": any;
  "teamId": any;
  player: Player;
  team: Team;
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "playerId": {
          name: 'playerId',
          type: 'any'
        },
        "teamId": {
          name: 'teamId',
          type: 'any'
        },
      },
      relations: {
        player: {
          name: 'player',
          type: 'Player',
          model: 'Player'
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
