import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotedetailPage } from './quotedetail.page';

describe('QuotedetailPage', () => {
  let component: QuotedetailPage;
  let fixture: ComponentFixture<QuotedetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuotedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
