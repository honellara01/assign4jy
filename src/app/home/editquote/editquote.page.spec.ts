import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditquotePage } from './editquote.page';

describe('EditquotePage', () => {
  let component: EditquotePage;
  let fixture: ComponentFixture<EditquotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditquotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
