/* tslint:disable */
import {
  Team,
  Player
} from '../index';

declare var Object: any;
export interface TeamPlayerInterface {
  "startDate": any;
  "endDate": any;
  "id"?: any;
  team?: Team;
  player?: Player;
}

export class TeamPlayer implements TeamPlayerInterface {
  "startDate": any;
  "endDate": any;
  "id": any;
  team: Team;
  player: Player;
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
        team: {
          name: 'team',
          type: 'Team',
          model: 'Team'
        },
        player: {
          name: 'player',
          type: 'Player',
          model: 'Player'
        },
      }
    }
  }
}
