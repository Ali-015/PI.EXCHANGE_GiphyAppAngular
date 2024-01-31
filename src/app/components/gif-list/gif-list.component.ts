import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GifService } from '../../services/gif-service.service';
import { GifComponent } from "../gif/gif.component";
import { Gif } from '../../interfaces/gifs.interfaces';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.scss',
  imports: [GifComponent, CommonModule, InfiniteScrollModule]
})
export class GifListComponent {

  gifs: Gif[] = [];
  trendingSearches: string[] = [];

  // EventEmitter to notify parent component about search click
  @Output() onSearchClick = new EventEmitter()

  // Subscription to manage the lifecycle of observable subscriptions
  subscription = new Subscription;

  offset = 0

  constructor(private gifsService: GifService) { }

  ngOnInit(): void {
    // Fetch trending GIFs on component initialization
    this.gifsService.getTrendingGifs(this.offset)

    // Subscribe to the trending GIFs data
    this.subscription = this.gifsService.getGifSubject()
      .subscribe((response) => {
        // Update the component's gifs property with the new data
        this.gifs = response;
      })

    // Fetch and update trending searches
    this.getTrendingSearches();
  }

  // Emits a search click event to the parent component
  searchClick(val: string) {
    this.onSearchClick.emit(val);
  }

  // Fetch and update trending searches
  getTrendingSearches() {
    this.gifsService.getTrendingSearches()

    // Subscribe to the trending searches data
    this.subscription = this.gifsService.getTrendingSearchesSubject()
      .subscribe((response) => {
        // Update the component's trendingSearches property with the new data
        this.trendingSearches = response;
      })
  }

  onScroll() {
    console.log('scrolled')
    this.offset +=50;
    this.gifsService.getTrendingGifs(this.offset)

    // Subscribe to the trending GIFs data
    this.subscription = this.gifsService.getGifSubject()
      .subscribe((response) => {
        // Apped the component's gifs property with the new data
        this.gifs.push(...response)
      })
  }

  // Unsubscribe from the observable subscriptions to avoid memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}