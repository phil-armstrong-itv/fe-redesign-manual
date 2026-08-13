import { Component, input } from '@angular/core';
import { RelationshipDetails } from '../../../types/party';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideArrowRightLeft } from '@ng-icons/lucide';
import { AgentRelationships } from './agent/agent-relationships.component';
import { ServiceCompanyRelationships } from './service-companies/service-company-relationships.component';
import { DeceasedRelationships } from './deceased-relationships/service-company-relationships.component';

@Component({
  selector: 'app-party-relationships-page',
  imports: [ AgentRelationships, ServiceCompanyRelationships, DeceasedRelationships],
  providers: [provideIcons({ lucidePlus, lucideArrowRightLeft })],
  templateUrl: './party-relationships.page.html',
  styleUrl: './party-relationships.page.css',
})
export class PartyRelationshipsPage {
  relationships = input.required<RelationshipDetails>();
}
