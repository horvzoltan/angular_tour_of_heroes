import {Component, Input, OnInit} from '@angular/core';
import {Brewery} from '../../shared/interfaces/brewery';

@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.scss']
})
export class BreweryDetailsComponent implements OnInit {
  @Input() brewery?: Brewery;

  constructor() {
  }

  ngOnInit(): void {
  }

}
