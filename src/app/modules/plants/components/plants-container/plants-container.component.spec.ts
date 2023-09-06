import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsContainerComponent } from './plants-container.component';

describe('PlantsContainerComponent', () => {
  let component: PlantsContainerComponent;
  let fixture: ComponentFixture<PlantsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsContainerComponent]
    });
    fixture = TestBed.createComponent(PlantsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
