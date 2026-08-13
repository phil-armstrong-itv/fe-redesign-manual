import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorRelationships } from './contributor-relationships.component';

describe('Agent', () => {
  let component: ContributorRelationships;
  let fixture: ComponentFixture<ContributorRelationships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorRelationships],
    }).compileComponents();

    fixture = TestBed.createComponent(ContributorRelationships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
