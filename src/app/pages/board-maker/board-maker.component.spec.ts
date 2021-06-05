import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMakerComponent } from './board-maker.component';

describe('BoardMakerComponent', () => {
  let component: BoardMakerComponent;
  let fixture: ComponentFixture<BoardMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
