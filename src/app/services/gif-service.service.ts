import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../environment/environment';
import { SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable()
export class GifService {
  // BehaviorSubject to hold trending GIFs data
  gifSubject = new BehaviorSubject<any>([]);
  
  // BehaviorSubject to hold trending searches data
  trendingSearchesSubject = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  // Fetches trending GIFs data from the Giphy API
  getTrendingGifs() {
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=25`)
      .subscribe(response => {
        // Updates gifSubject with the new trending GIFs data
        this.gifSubject.next(response.data);
      });
  }

  // Fetches trending searches data from the Giphy API
  getTrendingSearches() {
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/trending/searches?api_key=${environment.giphyApiKey}`)
      .subscribe((response) => {
        // Updates trendingSearchesSubject with the new trending searches data
        this.trendingSearchesSubject.next(response.data);
      });
  }

  // Searches for GIFs based on a given name using the Giphy API
  searchGifs(gifname: string) {
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/search?q=${gifname}&api_key=${environment.giphyApiKey}&limit=25`)
      .subscribe((response) => {
        // Updates gifSubject with the new search results
        this.gifSubject.next(response.data);
      });
  }

  // Returns an observable to subscribe to the trending GIFs data
  getGifSubject() {
    return this.gifSubject.asObservable();
  }

  // Returns an observable to subscribe to the trending searches data
  getTrendingSearchesSubject() {
    return this.trendingSearchesSubject.asObservable();
  }
}
