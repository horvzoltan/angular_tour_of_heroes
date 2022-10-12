import { BreweryService } from './brewery.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Brewery } from '../interfaces/brewery';
import { of, throwError } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

describe('BreweryServiceTest', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: BreweryService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BreweryService(httpClientSpy);
  });

  it('should be created', waitForAsync(() => {
    expect(service).toBeTruthy();
  }));

  it('service should return the correct values and only 1 call', (done: DoneFn) => {
    const expectedData: Brewery[] = [
      {
        id: '10-56-brewing-company-knox',
        name: '10-56 Brewing Company',
        brewery_type: 'micro',
        street: '400 Brown Cir',
        address_2: null,
        address_3: null,
        city: 'Knox',
        state: 'Indiana',
        county_providence: null,
        postal_code: '46534',
        country: 'United States',
        longitude: '-86.627954',
        latitude: '41.289715',
        phone: '6308165790',
        website_url: null,
        updated_at: '2022-08-20T02:56:08.975Z',
        created_at: '2022-08-20T02:56:08.975Z',
      },
      {
        id: '10-barrel-brewing-co-bend-1',
        name: '10 Barrel Brewing Co',
        brewery_type: 'large',
        street: '62970 18th St',
        address_2: null,
        address_3: null,
        city: 'Bend',
        state: 'Oregon',
        county_providence: null,
        postal_code: '97701-9847',
        country: 'United States',
        longitude: '-121.28170597038259',
        latitude: '44.08683530625218',
        phone: '5415851007',
        website_url: 'http://www.10barrel.com',
        updated_at: '2022-08-20T02:56:08.975Z',
        created_at: '2022-08-20T02:56:08.975Z',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getAllBrews().subscribe({
      next: (brews) => {
        expect(brews).withContext('expected brews').toEqual(expectedData);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return errorresponse', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));

    service.getAllBrews().subscribe((res: any) => {
      expect(res[0]).toEqual(errorResponse);
      done();
    });
  });
});
