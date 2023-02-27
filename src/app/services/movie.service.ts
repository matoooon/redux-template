import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchInterface } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  private url = 'https://www.omdbapi.com';
  private apiKey = 'd13b5d90';

  getMovies(search: string) {
    const params = new HttpParams()
      .append('s', search)
      .append('apiKey', this.apiKey);
    return this.http.get<SearchInterface>(this.url, {
      params,
    });
  }
}
