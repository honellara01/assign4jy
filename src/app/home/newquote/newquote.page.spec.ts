import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewquotePage } from './newquote.page';

describe('NewquotePage', () => {
  let component: NewquotePage;
  let fixture: ComponentFixture<NewquotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewquotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
