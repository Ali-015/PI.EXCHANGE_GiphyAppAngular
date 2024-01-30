import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchBoxComponent } from './gif-search-box.component';

describe('GifSearchBoxComponent', () => {
  let component: GifSearchBoxComponent;
  let fixture: ComponentFixture<GifSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifSearchBoxComponent]
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
