import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceasedRelationships } from './service-company-relationships.component';

describe('Agent', () => {
  let component: DeceasedRelationships;
  let fixture: ComponentFixture<DeceasedRelationships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeceasedRelationships],
    }).compileComponents();

    fixture = TestBed.createComponent(DeceasedRelationships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
