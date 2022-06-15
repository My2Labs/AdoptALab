import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCommentComponent } from './remove-comment.component';

describe('RemoveCommentComponent', () => {
  let component: RemoveCommentComponent;
  let fixture: ComponentFixture<RemoveCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
