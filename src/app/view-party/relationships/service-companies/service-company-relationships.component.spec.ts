import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompanyRelationships } from './service-company-relationships.component';

describe('Agent', () => {
  let component: ServiceCompanyRelationships;
  let fixture: ComponentFixture<ServiceCompanyRelationships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCompanyRelationships],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCompanyRelationships);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
