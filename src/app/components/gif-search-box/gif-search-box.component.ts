import { Component, Input } from '@angular/core';
import { GifService } from '../../services/gif-service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-search-box',
  templateUrl: './gif-search-box.component.html',
  styleUrl: './gif-search-box.component.scss'
})
export class GifSearchBoxComponent {

  gifs: Gif[] = [];
  @Input() searchTerm! : string;
  constructor(private gifService: GifService) { }

  search(){
    if(this.searchTerm !== ''){
      this.gifService.searchGifs(this.searchTerm)
      this.gifService.getGifSubject().subscribe((response)=>{
        this.gifs = response.data
      })
    }
  }

  ngOnChanges() {
    this.search();
  }
}
