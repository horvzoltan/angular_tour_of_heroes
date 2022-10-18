import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Brewery } from 'src/shared/classes/Brewery';
import { filter, Observable } from 'rxjs';
import { selectBrewerys, selectBrewery } from '../state/brewery.selectors';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  selectedBrew: Observable<Brewery> = this.store.select(selectBrewery);

  ngOnInit(): void {
    this.store.select(selectBrewery).pipe(filter((brewery) => !!brewery));
  }
}
