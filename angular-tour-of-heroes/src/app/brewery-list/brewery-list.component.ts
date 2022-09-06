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
  loading: boolean = true;

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit(): void {
    this.getBrews();
  }

  getBrews(): void {
    this.breweryService.getAllBrews().subscribe(
      next => {
        this.loading = true;
        // Just for testing
        setTimeout(() => {
          console.log('timeout');
          this.brews = next;
          this.currentBrewery = this.brews[0];
          this.loading = false;
        },1000);
      });
  }

  selectBrewery(brews: Brewery){
    this.currentBrewery = brews;
  }
}
