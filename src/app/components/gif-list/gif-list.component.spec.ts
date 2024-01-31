import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifListComponent } from './gif-list.component';
import { GifService } from '../../services/gif-service.service';

describe('GifListComponent', () => {
  let component: GifListComponent;
  let fixture: ComponentFixture<GifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifListComponent, HttpClientTestingModule],
      providers: [GifService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
