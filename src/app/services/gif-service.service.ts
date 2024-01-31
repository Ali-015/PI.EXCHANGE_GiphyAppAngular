import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../environment/environment';
import { SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable()
export class GifService {

  gifSubject = new BehaviorSubject<any>([]);
  trendingSearchesSubject = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=25`)
    .subscribe(response =>{
      this.gifSubject.next(response.data);
    });
  }
  getTrendingSearches(){
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/trending/searches?api_key=${environment.giphyApiKey}`)
    .subscribe((response) =>{
      this.trendingSearchesSubject.next(response.data);
    });
  }
  searchGifs(gifname :string){
    return this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/search?q=${gifname}&api_key=${environment.giphyApiKey}&limit=25`)
    .subscribe((response) =>{
      this.gifSubject.next(response.data);
    });
  }
  getGifSubject(){
    return this.gifSubject.asObservable();
  }
  getTrendingSearchesSubject(){
    return this.trendingSearchesSubject.asObservable();
  }
}
