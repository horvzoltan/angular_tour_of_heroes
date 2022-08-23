import {Component, Input, OnInit} from '@angular/core';
import {Brewery} from '../../shared/interfaces/brewery';

@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.css']
})
export class BreweryDetailsComponent implements OnInit {
  @Input() brewery?: Brewery;
  name?: string;
  postalCode?: string;
  phone?: string;
  createdAt?: string;

  constructor() {
    this.name = this.brewery?.name;
    this.postalCode = this.brewery?.postal_code;
    this.phone = this.brewery?.phone;
    this.createdAt = this.brewery?.created_at
  }

  ngOnInit(): void {

  }

}
