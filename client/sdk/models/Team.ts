/* tslint:disable */

declare var Object: any;
export interface TeamInterface {
  "name": any;
  "logoUrl"?: any;
  "description": any;
  "id"?: any;
}

export class Team implements TeamInterface {
  "name": any;
  "logoUrl": any;
  "description": any;
  "id": any;
  constructor(data?: TeamInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Team`.
   */
  public static getModelName() {
    return "Team";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Team for dynamic purposes.
  **/
  public static factory(data: TeamInterface): Team{
    return new Team(data);
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
      name: 'Team',
      plural: 'Teams',
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
