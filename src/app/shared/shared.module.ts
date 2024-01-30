import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { GifDetailComponent } from "../components/gif-detail/gif-detail.component";



@NgModule({
    declarations: [
        LazyImageComponent
    ],
    exports: [
        LazyImageComponent,
    ],
    imports: [
        CommonModule,
        GifDetailComponent
    ]
})
export class SharedModule { }
