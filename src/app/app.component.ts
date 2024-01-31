import { Component } from '@angular/core';
import { GifsModule } from "./gifs.module";
import { GifService } from './services/gif-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GifListComponent } from "./components/gif-list/gif-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [GifService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [GifsModule, HttpClientModule, GifListComponent]
})
export class AppComponent {
  title = 'GiphyApp';
  searchTerm : string = ""

  searchClick(val: string) {
    this.searchTerm = val;
  }
}
