import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreweryService} from '../../shared/services/brewery.service';
import {map} from 'rxjs/operators';
import {BreweryS} from '../../shared/interfaces/breweryS';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreweryListComponent implements OnInit {
  brews: BreweryS[] = [];
  selectedOptions!: Array<BreweryS> | null;

  constructor(
    private breweryService: BreweryService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getBrews();
  }

  getBrews(): void {
    this.breweryService.getAllBrews()
      .pipe(
        map((breweries) =>
          breweries.filter((brewery) =>
            !!brewery.street
          ).map((brewery) => {
            return <BreweryS>{
              id: brewery.id,
              name: brewery.name,
              postal_code: brewery.postal_code,
              phone: brewery.phone,
              created_at: brewery.created_at
            };
          })
        )
      )
      .subscribe(
      brews => {
        console.log(brews);
        this.brews = brews;
        this.selectedOptions = [];
        this.cd.detectChanges();
        this.selectedOptions.push(this.brews[0]);
      });
  }

  onNgModelChange(breweries: BreweryS[]) {
    this.selectedOptions = [];
    this.cd.detectChanges();
    this.selectedOptions.push(breweries[0]);
  }

}
