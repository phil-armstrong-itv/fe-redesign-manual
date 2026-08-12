import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartyPage } from './view-party-page';

describe('ViewPartyPage', () => {
  let component: ViewPartyPage;
  let fixture: ComponentFixture<ViewPartyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPartyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPartyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
