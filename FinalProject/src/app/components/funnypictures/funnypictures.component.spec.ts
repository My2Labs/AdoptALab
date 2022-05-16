import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnypicturesComponent } from './funnypictures.component';

describe('FunnypicturesComponent', () => {
  let component: FunnypicturesComponent;
  let fixture: ComponentFixture<FunnypicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnypicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnypicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
