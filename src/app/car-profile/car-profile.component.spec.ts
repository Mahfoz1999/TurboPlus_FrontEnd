import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileComponent } from './car-profile.component';

describe('CarProfileComponent', () => {
  let component: CarProfileComponent;
  let fixture: ComponentFixture<CarProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarProfileComponent]
    });
    fixture = TestBed.createComponent(CarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
