import { Injectable } from '@angular/core';
import { Championship } from './championship';
import { CHAMPIONSHIPS } from './mock-championships';

@Injectable()
export class ChampionshipService {

  constructor() { }
  getChampionships(): Promise<Championship[]> {
    return Promise.resolve(CHAMPIONSHIPS);
  }
}
