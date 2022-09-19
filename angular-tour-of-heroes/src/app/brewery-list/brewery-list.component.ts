import {Component, OnInit} from '@angular/core';
import {BreweryService} from '../../shared/services/brewery.service';
import {Brewery} from '../../shared/interfaces/brewery';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})

export class BreweryListComponent implements OnInit {
  brews: Brewery[] = [];

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit(): void {
    this.getBrews();
  }

  getBrews(): void {
    this.breweryService.getAllBrews().pipe(
      map((breweries) =>
        breweries.filter((brewery) =>
          !!brewery.street
        )
      )
    ).subscribe(
      brews => {
        this.brews = brews;
      });
  }

}
