import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    SitesComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SitesModule { }
