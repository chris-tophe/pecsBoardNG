import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictoSearchComponent } from './picto-search.component';

describe('PictoSearchComponent', () => {
  let component: PictoSearchComponent;
  let fixture: ComponentFixture<PictoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
