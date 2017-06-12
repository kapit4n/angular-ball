/* tslint:disable */
import {
  Match,
  Player
} from '../index';

declare var Object: any;
export interface MatchGoalInterface {
  "goalTime": Date;
  "goalMinute": number;
  "description"?: string;
  "id"?: any;
  "matchId"?: any;
  "playerId"?: any;
  match?: Match;
  player?: Player;
}

export class MatchGoal implements MatchGoalInterface {
  "goalTime": Date;
  "goalMinute": number;
  "description": string;
  "id": any;
  "matchId": any;
  "playerId": any;
  match: Match;
  player: Player;
  constructor(data?: MatchGoalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MatchGoal`.
   */
  public static getModelName() {
    return "MatchGoal";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MatchGoal for dynamic purposes.
  **/
  public static factory(data: MatchGoalInterface): MatchGoal{
    return new MatchGoal(data);
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
      name: 'MatchGoal',
      plural: 'MatchGoals',
      properties: {
        "goalTime": {
          name: 'goalTime',
          type: 'Date'
        },
        "goalMinute": {
          name: 'goalMinute',
          type: 'number'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "matchId": {
          name: 'matchId',
          type: 'any'
        },
        "playerId": {
          name: 'playerId',
          type: 'any'
        },
      },
      relations: {
        match: {
          name: 'match',
          type: 'Match',
          model: 'Match'
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
