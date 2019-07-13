import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apikey = '3b4d0ddf';

  apiUrl = 'http://pos.honeydewpos.com/api/SyncMenuItem';

  constructor(private http: HttpClient, public httpClient: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apikey}`)
      .pipe(
        map(results => {
          console.log('RAW: ', results);
          return results['Search'];

        })
      );

  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apikey}`)
  }


display(){

    const headers = new HttpHeaders({
      brand: '2'
    });

    this.httpClient.get(this.apiUrl, { headers }).subscribe(
      response => {
        console.log('body', response);
      },
      err => {
        console.log('ERROR!: ', err);
      }
    );
  

    
  }

}



