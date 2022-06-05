import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLoginpageComponent } from './reg-loginpage.component';

describe('RegLoginpageComponent', () => {
  let component: RegLoginpageComponent;
  let fixture: ComponentFixture<RegLoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegLoginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
