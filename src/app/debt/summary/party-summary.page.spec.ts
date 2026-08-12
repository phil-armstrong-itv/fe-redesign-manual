import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySummaryPage } from './party-summary.page';

describe('ViewPartyPage', () => {
  let component: PartySummaryPage;
  let fixture: ComponentFixture<PartySummaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartySummaryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PartySummaryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
