import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { Subject } from 'rxjs/internal/Subject';
import { throttleTime } from 'rxjs/internal/operators/throttleTime';

@Component({
  // Component selector used in HTML
  selector: 'shared-lazy-image',
  // Template and styles for the component
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {

  // Holds the currently selected GIF
  selectedGif!: Gif;

  // Indicates whether the details are visible or not
  isDetailsVisible: boolean = false;

  // Input property to receive the GIF details from the parent component
  @Input()
  public gif!: Gif;

  // Indicates whether the image has loaded or not
  public hasLoaded: boolean = false;

  // Subject used for throttling the 'onLoad' event
  private loadSubject = new Subject<void>();

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Throttle the 'onLoad' event to prevent it from firing too frequently
    this.loadSubject.pipe(throttleTime(200)).subscribe(() => {
      this.hasLoaded = true;
    });
  }

  // Event handler for the 'onLoad' event of the image
  onLoad() {
    // Emit a value to the loadSubject, triggering the throttled 'onLoad' logic
    this.loadSubject.next();
  }

  // Function to open details of a GIF
  openDetails(gif: Gif): void {
    this.selectedGif = gif;
    this.isDetailsVisible = true;
  }

  // Event handler for the close button click in details
  onCloseClick(val: boolean) {
    this.isDetailsVisible = !val;
  }
}
