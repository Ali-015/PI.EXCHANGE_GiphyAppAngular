import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GifService } from '../../services/gif-service.service';
import { GifComponent } from "../gif/gif.component";

@Component({
    selector: 'app-gif-list',
    standalone: true,
    templateUrl: './gif-list.component.html',
    styleUrl: './gif-list.component.scss',
    imports: [GifComponent, CommonModule]
})
export class GifListComponent {

  gifs: any[] = [];
  trendingSearches: any[] = [];
  @Output() onSearchClick = new EventEmitter()
  subscription: any = new Subscription;

  constructor(private gifsService: GifService) { }

  ngOnInit(): void {
    this.gifsService.getTrendingGifs()
    this.subscription = this.gifsService.getGifs()
    .subscribe((response: any)=>{
      this.gifs = response
    })
    this.getTrendingSearches()
  }

  searchClick(val : string) {
    this.onSearchClick.emit(val);
  }

  getTrendingSearches() {
    this.gifsService.getTrendingSearches()
    this.subscription = this.gifsService.getGifs1()
    .subscribe((response: any) => {
      this.trendingSearches = response;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
