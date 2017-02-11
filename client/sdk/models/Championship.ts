/* tslint:disable */

declare var Object: any;
export interface ChampionshipInterface {
  name: string;
  logoUrl?: string;
  description?: string;
  id?: number;
}

export class Championship implements ChampionshipInterface {
  name: string;
  logoUrl: string;
  description: string;
  id: number;
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
        name: {
          name: 'name',
          type: 'string'
        },
        logoUrl: {
          name: 'logoUrl',
          type: 'string'
        },
        description: {
          name: 'description',
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
