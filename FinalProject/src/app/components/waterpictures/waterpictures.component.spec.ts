import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterpicturesComponent } from './waterpictures.component';

describe('WaterpicturesComponent', () => {
  let component: WaterpicturesComponent;
  let fixture: ComponentFixture<WaterpicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterpicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
