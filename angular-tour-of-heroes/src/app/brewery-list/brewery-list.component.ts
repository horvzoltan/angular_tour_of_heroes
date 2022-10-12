import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BreweryService } from '../../shared/services/brewery.service';
import { map } from 'rxjs/operators';
import { BreweryShrink } from '../../shared/interfaces/breweryShrink';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectBrewerys } from '../state/brewery.selectors';
import { getItems } from '../state/brewery.actions';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreweryListComponent implements OnInit {
  brews: Observable<readonly BreweryShrink[]> = this.store.pipe(
    select(selectBrewerys)
  );

  selectedOptions!: Array<BreweryShrink> | null;

  selectedBrew!: Observable<BreweryShrink> | null;

  constructor(
    private breweryService: BreweryService,
    private cd: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getItems());
  }

  getBrews(): void {
    this.breweryService
      .getAllBrews()
      .pipe(
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
      )
      .subscribe((brews) => {
        this.brews = brews;
        this.selectedOptions = [];
        this.cd.detectChanges();
        this.selectedOptions.push(this.brews[0]);
      });
  }

  onNgModelChange(breweries: BreweryShrink[]) {
    this.selectedOptions = [];
    this.cd.detectChanges();
    this.selectedOptions.push(breweries[0]);
  }
}
