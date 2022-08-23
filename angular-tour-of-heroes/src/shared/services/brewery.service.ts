import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
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

  getAllBrews(): Observable<any> {
    return this.http.get<any>(this.brewUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log(`fetched Brews`)),
        catchError(this.handleError<Brewery[]>('getAllBrews', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
