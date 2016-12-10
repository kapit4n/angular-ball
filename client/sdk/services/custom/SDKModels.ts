/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Team } from '../../models/Team';

@Injectable()
export class SDKModels {

  private models: { [name: string]: any } = {
    User: User,
    Team: Team,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }
}
