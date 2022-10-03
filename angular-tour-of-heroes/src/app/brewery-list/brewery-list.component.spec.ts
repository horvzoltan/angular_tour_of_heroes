import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BreweryListComponent } from 'src/app/brewery-list/brewery-list.component';
import { BreweryService } from '../../shared/services/brewery.service';
import { BreweryServiceMock } from 'src/shared/mock/brewery.service.mock';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {MatIconModule} from '@angular/material/icon';
import {BreweryDetailsComponent} from '../brewery-details/brewery-details.component';
import {MatCardModule} from '@angular/material/card';
import {By} from '@angular/platform-browser';

describe('BreweryListComponent', () => {
  let comp: BreweryListComponent;
  let fixture: ComponentFixture<BreweryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectModule, MatListModule, CommonModule, FormsModule, RouterTestingModule,MatIconModule,MatCardModule],
      declarations: [BreweryListComponent,BreweryDetailsComponent],
      providers: [
        { provide: BreweryService, useClass: BreweryServiceMock },
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BreweryListComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create the app', waitForAsync(() => {
    expect(comp).toBeTruthy();
  }));

  it('should have getbrews', waitForAsync(() => {
    expect(comp.getBrews).toBeTruthy();
  }));

  it('should have list container', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.list')).toBeTruthy();
  }));

  it('should have length 2', waitForAsync(() => {
    console.log(comp.brews.length);
    expect(comp.brews.length).toEqual(2);
  }));

  it('should have list items', waitForAsync(() => {
    expect(fixture.debugElement.query(By.css('.mat-list-item'))).toBeTruthy();
  }));

});
