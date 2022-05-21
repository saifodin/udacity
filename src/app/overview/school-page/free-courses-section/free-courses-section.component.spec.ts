import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCoursesSectionComponent } from './free-courses-section.component';

describe('FreeCoursesSectionComponent', () => {
  let component: FreeCoursesSectionComponent;
  let fixture: ComponentFixture<FreeCoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCoursesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
