import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BreweryListComponent} from './brewery-list/brewery-list.component';
import {SubmitFormComponent} from './submit-form/submit-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/brewlist', pathMatch: 'full'},
  {path: 'users', component: BreweryListComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'brewlist', component: BreweryListComponent},
  {path: 'submit', component: SubmitFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
