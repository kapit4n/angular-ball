/* tslint:disable */

declare var Object: any;
export interface PlayerInterface {
  name: string;
  avatarUrl?: string;
  biography?: string;
  id?: number;
}

export class Player implements PlayerInterface {
  name: string;
  avatarUrl: string;
  biography: string;
  id: number;
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
        name: {
          name: 'name',
          type: 'string'
        },
        avatarUrl: {
          name: 'avatarUrl',
          type: 'string'
        },
        biography: {
          name: 'biography',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
