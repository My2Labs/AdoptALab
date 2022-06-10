import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaboutComponent } from './allabout.component';

describe('AllaboutComponent', () => {
  let component: AllaboutComponent;
  let fixture: ComponentFixture<AllaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
