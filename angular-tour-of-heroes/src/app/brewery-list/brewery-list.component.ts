import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {BreweryService} from '../../shared/services/brewery.service';
import {Brewery} from '../../shared/interfaces/brewery';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreweryListComponent implements OnInit {
  brews: Brewery[] = [];
  selectedOptions!: Array<Brewery> | null;

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
          )
        )
      ).subscribe(
      brews => {
        this.brews = brews;
        this.selectedOptions = [];
        this.cd.detectChanges();
        this.selectedOptions.push(this.brews[0]);
      });
  }

  onNgModelChange(breweries: Brewery[]) {
    this.selectedOptions = [];
    this.cd.detectChanges();
    this.selectedOptions.push(breweries[0]);
  }

}
