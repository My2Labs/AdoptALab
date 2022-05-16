import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingpicturesComponent } from './campingpictures.component';

describe('CampingpicturesComponent', () => {
  let component: CampingpicturesComponent;
  let fixture: ComponentFixture<CampingpicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampingpicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
