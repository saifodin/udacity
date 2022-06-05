import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighWithComponent } from './sigh-with.component';

describe('SighWithComponent', () => {
  let component: SighWithComponent;
  let fixture: ComponentFixture<SighWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SighWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SighWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
