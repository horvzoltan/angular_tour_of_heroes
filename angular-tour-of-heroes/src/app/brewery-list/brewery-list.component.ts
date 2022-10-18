import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreweryShrink } from '../../shared/interfaces/breweryShrink';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getItems, loadItem } from '../state/brewery.actions';
import { selectBrewerys, selectBrewery } from '../state/brewery.selectors';
import { Brewery } from 'src/shared/classes/Brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreweryListComponent implements OnInit {
  brews: Observable<BreweryShrink[]> = this.store.select(selectBrewerys).pipe(
    map((breweries) =>
      breweries
        .filter((brewery) => !!brewery.street)
        .map((brewery, index) => {
          if (index === 0) {
            this.selectedOptions = new Array<BreweryShrink>({
              id: brewery.id,
              name: brewery.name,
              postal_code: brewery.postal_code,
              phone: brewery.phone,
              created_at: brewery.created_at,
            });
          }
          return <BreweryShrink>{
            id: brewery.id,
            name: brewery.name,
            postal_code: brewery.postal_code,
            phone: brewery.phone,
            created_at: brewery.created_at,
          };
        })
    )
  );

  selectedOptions!: BreweryShrink[] | null;

  constructor(private store: Store) {}

  onChange(newValue: Brewery) {
    this.store.dispatch(loadItem({ selected: newValue }));
  }

  ngOnInit(): void {
    this.store.dispatch(getItems());
  }
}
