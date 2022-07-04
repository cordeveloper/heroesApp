import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './page/search/search.component';
import { HeroeComponent } from './page/heroe/heroe.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
