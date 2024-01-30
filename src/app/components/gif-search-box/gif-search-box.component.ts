import { Component } from '@angular/core';
import { GifService } from '../../services/gif-service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-search-box',
  templateUrl: './gif-search-box.component.html',
  styleUrl: './gif-search-box.component.scss'
})
export class GifSearchBoxComponent {

  gifs: Gif[] = [];
  constructor(private gifService: GifService) { }

  search(searchTerm: string){
    if(searchTerm !== ''){
      this.gifService.searchGifs(searchTerm)
      this.gifService.getGifs().subscribe((response: any)=>{
        console.log(response);
        this.gifs = response.data
      })
    }
  }
}
