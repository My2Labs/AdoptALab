import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverphotoComponent } from './coverphoto.component';

describe('CoverphotoComponent', () => {
  let component: CoverphotoComponent;
  let fixture: ComponentFixture<CoverphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
