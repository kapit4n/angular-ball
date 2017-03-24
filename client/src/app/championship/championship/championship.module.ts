import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionshipComponent } from './championship.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ChampionshipComponent],
})
export class ChampionshipModule { }
