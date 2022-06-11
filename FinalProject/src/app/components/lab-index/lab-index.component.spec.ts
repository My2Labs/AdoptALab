import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabIndexComponent } from './lab-index.component';

describe('LabIndexComponent', () => {
  let component: LabIndexComponent;
  let fixture: ComponentFixture<LabIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
