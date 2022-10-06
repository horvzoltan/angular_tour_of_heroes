import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Brewery} from '../interfaces/brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private brewUrl = 'https://api.openbrewerydb.org/breweries';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer key',
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllBrews(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.brewUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Brewery[]>('getAllBrews', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      const array = [error,result];
      // console.log(`${operation} failed: ${error.message}`);
      return of(array as any);
    };
  }
}
