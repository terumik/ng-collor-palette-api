import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSortComponent } from './color-sort.component';

describe('ColorSortComponent', () => {
  let component: ColorSortComponent;
  let fixture: ComponentFixture<ColorSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
