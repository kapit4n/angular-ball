/* tslint:disable */

declare var Object: any;
export interface ChampionshipInterface {
  "name": any;
  "logoUrl"?: any;
  "description"?: any;
  "id"?: any;
}

export class Championship implements ChampionshipInterface {
  "name": any;
  "logoUrl": any;
  "description": any;
  "id": any;
  constructor(data?: ChampionshipInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Championship`.
   */
  public static getModelName() {
    return "Championship";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Championship for dynamic purposes.
  **/
  public static factory(data: ChampionshipInterface): Championship{
    return new Championship(data);
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
      name: 'Championship',
      plural: 'Championships',
      properties: {
        "name": {
          name: 'name',
          type: 'any'
        },
        "logoUrl": {
          name: 'logoUrl',
          type: 'any'
        },
        "description": {
          name: 'description',
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
