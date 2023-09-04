import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantButtonsComponent } from './plant-buttons.component';

describe('PlantButtonsComponent', () => {
  let component: PlantButtonsComponent;
  let fixture: ComponentFixture<PlantButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantButtonsComponent]
    });
    fixture = TestBed.createComponent(PlantButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
