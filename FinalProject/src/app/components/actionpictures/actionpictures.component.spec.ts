import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionpicturesComponent } from './actionpictures.component';

describe('ActionpicturesComponent', () => {
  let component: ActionpicturesComponent;
  let fixture: ComponentFixture<ActionpicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionpicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
