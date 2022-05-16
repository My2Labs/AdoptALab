import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingridsectionsComponent } from './maingridsections.component';

describe('MaingridsectionsComponent', () => {
  let component: MaingridsectionsComponent;
  let fixture: ComponentFixture<MaingridsectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaingridsectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaingridsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
