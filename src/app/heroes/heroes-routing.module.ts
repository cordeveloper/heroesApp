import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './page/heroe/heroe.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { SearchComponent } from './page/search/search.component';
import { AddComponent } from './pages/add/add.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
