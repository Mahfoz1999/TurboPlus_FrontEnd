import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSliderComponent } from './car-slider.component';

describe('CarSliderComponent', () => {
  let component: CarSliderComponent;
  let fixture: ComponentFixture<CarSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSliderComponent]
    });
    fixture = TestBed.createComponent(CarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
