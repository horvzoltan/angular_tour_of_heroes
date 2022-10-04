import { Component, Input, OnInit } from '@angular/core';
import {BreweryS} from '../../shared/interfaces/breweryS';

@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.scss'],
})
export class BreweryDetailsComponent implements OnInit {
  @Input() brewery?: BreweryS;

  constructor() {}

  ngOnInit(): void {}
}
