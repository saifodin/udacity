import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsFeaturesComponent } from './programs-features.component';

describe('ProgramsFeaturesComponent', () => {
  let component: ProgramsFeaturesComponent;
  let fixture: ComponentFixture<ProgramsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
