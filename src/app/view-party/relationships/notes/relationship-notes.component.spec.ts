import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipNotes } from './relationship-notes.component';

describe('Agent', () => {
  let component: RelationshipNotes;
  let fixture: ComponentFixture<RelationshipNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(RelationshipNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
