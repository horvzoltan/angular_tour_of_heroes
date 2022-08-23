import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BreweryListComponent} from './brewery-list/brewery-list.component';
import {BreweryDetailsComponent} from './brewery-details/brewery-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/brewlist', pathMatch: 'full'},
  {path: 'users', component: BreweryListComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'brewdetails', component: BreweryDetailsComponent},
  {path: 'brewlist', component: BreweryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
