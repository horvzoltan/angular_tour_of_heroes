import { Component, Input, OnInit } from '@angular/core';
import {BreweryShrink} from '../../shared/interfaces/breweryShrink';

@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.scss'],
})
export class BreweryDetailsComponent implements OnInit {
  @Input() brewery?: BreweryShrink;

  constructor() {}

  ngOnInit(): void {}
}
