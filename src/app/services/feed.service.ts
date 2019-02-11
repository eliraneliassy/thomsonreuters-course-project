import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private BASE_URL = 'https://api.fashbash.co/api/feed';

  constructor(private httpClient: HttpClient) { }

  getItems(page: number = 0): Observable<Item[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<Item[]>(this.BASE_URL, { params: params });
  }
}
