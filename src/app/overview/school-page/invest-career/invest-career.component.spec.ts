import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCareerComponent } from './invest-career.component';

describe('InvestCareerComponent', () => {
  let component: InvestCareerComponent;
  let fixture: ComponentFixture<InvestCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
