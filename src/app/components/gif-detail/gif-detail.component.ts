import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-detail.component.html',
  styleUrl: './gif-detail.component.scss'
})
export class GifDetailComponent {

  @Input() gifDetails!: Gif;
  @Output() onCloseClick = new EventEmitter();
  closeModal(val: boolean) {
    this.onCloseClick.emit(val);
  }
}
