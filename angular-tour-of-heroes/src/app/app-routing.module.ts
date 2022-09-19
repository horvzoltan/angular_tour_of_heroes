import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreweryListComponent} from './brewery-list/brewery-list.component';
import {SubmitFormComponent} from './submit-form/submit-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/brewlist', pathMatch: 'full'},
  {path: 'users', component: BreweryListComponent},
  {path: 'brewlist', component: BreweryListComponent},
  {path: 'submit', component: SubmitFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
