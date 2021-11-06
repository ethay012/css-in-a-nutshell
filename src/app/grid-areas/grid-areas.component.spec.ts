import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAreasComponent } from './grid-areas.component';

describe('GridAreasComponent', () => {
  let component: GridAreasComponent;
  let fixture: ComponentFixture<GridAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
