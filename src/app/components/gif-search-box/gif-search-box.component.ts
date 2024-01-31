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

  // Input property to receive the search term from the parent component
  @Input() searchTerm! : string;

  constructor(private gifService: GifService) { }

  // Function to initiate the search when the search term changes
  search() {
    if(this.searchTerm !== '') {
      // Call the searchGifs method in the GifService to fetch GIFs based on the search term
      this.gifService.searchGifs(this.searchTerm);

      // Subscribe to the GifSubject in the GifService to get the search results
      this.gifService.getGifSubject().subscribe((response) => {
        // Update the component's gifs property with the new search results
        this.gifs = response.data;
      });
    }
  }

  // Lifecycle hook that is called when the input properties change
  ngOnChanges() {
    // Trigger the search when the search term changes
    this.search();
  }
}
