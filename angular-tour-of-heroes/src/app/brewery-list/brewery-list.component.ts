import {Component, OnInit} from '@angular/core';
import {BreweryService} from '../../shared/services/brewery.service';
import {Brewery} from '../../shared/interfaces/brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent implements OnInit {
  brews: Brewery[] = [];
  currentBrewery?: Brewery;

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit(): void {
    this.getBrews();
  }

  getBrews(): void {
    this.breweryService.getAllBrews().subscribe(
      next => {
        this.brews = next;
        this.currentBrewery = this.brews[0];
      });
  }

  selectBrewery(brews: Brewery){
    this.currentBrewery = brews;
  }
}
