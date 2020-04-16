import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushSortComponent } from './brush-sort.component';

describe('BrushSortComponent', () => {
  let component: BrushSortComponent;
  let fixture: ComponentFixture<BrushSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
