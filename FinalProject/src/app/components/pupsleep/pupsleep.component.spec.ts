import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupsleepComponent } from './pupsleep.component';

describe('PupsleepComponent', () => {
  let component: PupsleepComponent;
  let fixture: ComponentFixture<PupsleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupsleepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupsleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
