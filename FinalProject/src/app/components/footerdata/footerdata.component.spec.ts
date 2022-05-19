import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterdataComponent } from './footerdata.component';

describe('FooterdataComponent', () => {
  let component: FooterdataComponent;
  let fixture: ComponentFixture<FooterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
