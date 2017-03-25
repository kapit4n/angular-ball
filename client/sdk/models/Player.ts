/* tslint:disable */

declare var Object: any;
export interface PlayerInterface {
  "name": any;
  "avatarUrl"?: any;
  "biography"?: any;
  "id"?: any;
}

export class Player implements PlayerInterface {
  "name": any;
  "avatarUrl": any;
  "biography": any;
  "id": any;
  constructor(data?: PlayerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Player`.
   */
  public static getModelName() {
    return "Player";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Player for dynamic purposes.
  **/
  public static factory(data: PlayerInterface): Player{
    return new Player(data);
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
      name: 'Player',
      plural: 'Players',
      properties: {
        "name": {
          name: 'name',
          type: 'any'
        },
        "avatarUrl": {
          name: 'avatarUrl',
          type: 'any'
        },
        "biography": {
          name: 'biography',
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
