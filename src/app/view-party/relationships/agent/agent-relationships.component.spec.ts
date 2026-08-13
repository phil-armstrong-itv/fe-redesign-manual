import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRelationships } from './agent-relationships.component';

describe('Agent', () => {
  let component: AgentRelationships;
  let fixture: ComponentFixture<AgentRelationships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentRelationships],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentRelationships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
