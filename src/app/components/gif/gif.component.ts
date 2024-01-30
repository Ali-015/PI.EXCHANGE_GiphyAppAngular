import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'app-gif',
    standalone: true,
    templateUrl: './gif.component.html',
    styleUrl: './gif.component.scss',
    imports: [SharedModule, CommonModule]
})
export class GifComponent implements OnInit {

  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required');
  }}
