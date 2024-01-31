import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  // Component selector used in HTML
  selector: 'app-gif-detail',
  // Indicates that this component should be treated as a standalone module
  standalone: true,
  // Importing CommonModule for common Angular directives and pipes
  imports: [CommonModule],
  // Template and styles for the component
  templateUrl: './gif-detail.component.html',
  styleUrl: './gif-detail.component.scss'
})
export class GifDetailComponent {

  // Input property to receive the GIF details from the parent component
  @Input() gifDetails!: Gif;

  // Output property to emit an event when the close button is clicked
  @Output() onCloseClick = new EventEmitter();

  // Function to emit an event when the close button is clicked
  closeModal(val: boolean) {
    this.onCloseClick.emit(val);
  }
}