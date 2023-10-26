import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubaiSectionComponent } from './dubai-section.component';

describe('DubaiSectionComponent', () => {
  let component: DubaiSectionComponent;
  let fixture: ComponentFixture<DubaiSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DubaiSectionComponent]
    });
    fixture = TestBed.createComponent(DubaiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
