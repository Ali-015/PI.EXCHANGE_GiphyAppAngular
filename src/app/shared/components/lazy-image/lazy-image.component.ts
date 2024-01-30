import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {

  selectedGif: any; // Holds the currently selected GIF
  isDetailsVisible: boolean = false;

  @Input()
  public gif!: Gif;

  public hasLoaded: boolean = false;


  ngOnInit(): void {
    if ( !this.gif.url ) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }

  openDetails(gif: any): void {
    this.selectedGif = gif;
    this.isDetailsVisible = true;
  }

  onCloseClick(val: boolean) {
    this.isDetailsVisible = !val
  }

}
