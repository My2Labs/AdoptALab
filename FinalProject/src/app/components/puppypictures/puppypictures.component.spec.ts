import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppypicturesComponent } from './puppypictures.component';

describe('PuppypicturesComponent', () => {
  let component: PuppypicturesComponent;
  let fixture: ComponentFixture<PuppypicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuppypicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppypicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
