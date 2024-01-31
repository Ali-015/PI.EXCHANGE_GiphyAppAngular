import { FormsModule } from '@angular/forms';
import { GifService } from './../../services/gif-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchBoxComponent } from './gif-search-box.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GifSearchBoxComponent', () => {
  let component: GifSearchBoxComponent;
  let fixture: ComponentFixture<GifSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifSearchBoxComponent],
      providers: [GifService],
      imports: [HttpClientTestingModule, FormsModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
