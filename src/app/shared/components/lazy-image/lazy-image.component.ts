import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { Subject } from 'rxjs/internal/Subject';
import { throttleTime } from 'rxjs/internal/operators/throttleTime';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {

  selectedGif!: Gif; // Holds the currently selected GIF
  isDetailsVisible: boolean = false;

  @Input()
  public gif!: Gif;

  public hasLoaded: boolean = false;

  private loadSubject = new Subject<void>();


  ngOnInit(): void {
    this.loadSubject.pipe(throttleTime(200)).subscribe(() => {
      this.hasLoaded = true;
    });
  }

  onLoad() {
    this.loadSubject.next();
  }

  openDetails(gif: Gif): void {
    this.selectedGif = gif;
    this.isDetailsVisible = true;
  }

  onCloseClick(val: boolean) {
    this.isDetailsVisible = !val
  }

}
