import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../environment/environment';

@Injectable()
export class GifService {

  gifs = new BehaviorSubject<any>([]);
  gifs1 = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=25`)
    .subscribe((response: any) =>{
      this.gifs.next(response.data);
    });
  }
  getTrendingSearches(){
    return this.http.get(`https://api.giphy.com/v1/trending/searches?api_key=${environment.giphyApiKey}`)
    .subscribe((response: any) =>{
      this.gifs1.next(response.data);
    });
  }
  searchGifs(gifname :string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifname}&api_key=${environment.giphyApiKey}&limit=25`)
    .subscribe((response: any) =>{
      this.gifs.next(response.data);
    });
  }
  getGifs(){
    return this.gifs.asObservable();
  }
  getGifs1(){
    return this.gifs1.asObservable();
  }
}
