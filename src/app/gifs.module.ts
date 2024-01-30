import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifSearchBoxComponent } from './components/gif-search-box/gif-search-box.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GifSearchBoxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    GifSearchBoxComponent
  ]
})
export class GifsModule { }
