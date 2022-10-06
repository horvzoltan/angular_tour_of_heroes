import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MatSelectModule} from '@angular/material/select';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BreweryListComponent} from '../brewery-list/brewery-list.component';
import {BreweryDetailsComponent} from './brewery-details.component';
import {BreweryService} from '../../shared/services/brewery.service';
import {BreweryServiceMock} from '../../shared/mock/brewery.service.mock';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('BreweryDetailsComponent', () => {
  let comp: BreweryDetailsComponent;
  let fixture: ComponentFixture<BreweryDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSelectModule,
        CommonModule,
        MatListModule,
        RouterTestingModule,
        FormsModule,
        MatIconModule,
        MatCardModule,
      ],
      declarations: [BreweryListComponent, BreweryDetailsComponent],
      providers: [
        {provide: BreweryService, useClass: BreweryServiceMock},
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BreweryDetailsComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create the app', waitForAsync(() => {
    expect(comp).toBeTruthy();
  }));

  it('should have content container', waitForAsync(() => {
    expect(fixture.debugElement.nativeElement.querySelector('.content-container')).toBeTruthy();
  }));

  it('should have property container', waitForAsync(() => {
    expect(fixture.debugElement.nativeElement.querySelector('.property-container')).toBeTruthy();
  }));

  it('should have 4 property containers', waitForAsync(() => {
    expect(fixture.debugElement.nativeElement.querySelectorAll('.property-container').length).toEqual(4);
  }));
});
