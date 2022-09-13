import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../shared/services/loading-service.service';
import {delay} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Example 1';

  constructor(public loading: LoadingService) {
  }

  ngOnInit(){
  }


}
