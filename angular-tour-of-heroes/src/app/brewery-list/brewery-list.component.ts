import {Component, OnInit} from '@angular/core';
import {BreweryService} from '../brewery.service';
import {Brewery} from '../brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
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
      });
  }
  selectBrewery(brews: Brewery){
    this.currentBrewery = brews;
  }
  filteredBrews(): Brewery[] {
    return this.brews;
  }
}
