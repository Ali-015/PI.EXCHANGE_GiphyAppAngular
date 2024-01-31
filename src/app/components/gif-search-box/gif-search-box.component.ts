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

  search(searchTerm: string){
    if(searchTerm !== ''){
      this.gifService.searchGifs(searchTerm)
      this.gifService.getGifs().subscribe((response: any)=>{
        this.gifs = response.data
      })
    }
  }

  ngOnChanges() {
    this.search(this.searchTerm);
  }
}
