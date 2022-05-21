import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsSectionComponent } from './paths-section.component';

describe('PathsSectionComponent', () => {
  let component: PathsSectionComponent;
  let fixture: ComponentFixture<PathsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
