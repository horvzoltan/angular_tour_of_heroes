import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreweryShrink } from '../../shared/interfaces/breweryShrink';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getItems } from '../state/brewery.actions';
import { selectBrewerys } from '../state/brewery.selectors';

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
        .map((brewery) => {
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

  selectedOptions!: Array<BreweryShrink> | null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getItems());

    this.brews
      .pipe(
        map((brew) => {
          return brew[0];
        })
      )
      .subscribe((item) => {
        this.selectedOptions = new Array(item);
      });
  }
}
