import { Component, inject, input } from '@angular/core';
import { PartyType, RelationshipDetails } from '../../../types/party';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus, lucideArrowRightLeft } from '@ng-icons/lucide';
import { AgentRelationships } from './agent-relationships/agent-relationships.component';
import { ServiceCompanyRelationships } from './service-companies/service-company-relationships.component';
import { DeceasedRelationships } from './deceased-relationships/service-company-relationships.component';
import { RelationshipNotes } from './relationship-notes/relationship-notes.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContributorRelationships } from './contributor-relationships/contributor-relationships.component';

@Component({
  selector: 'app-party-relationships-page',
  imports: [
    AgentRelationships,
    ServiceCompanyRelationships,
    DeceasedRelationships,
    RelationshipNotes,
    ContributorRelationships,
  ],
  providers: [provideIcons({ lucidePlus, lucideArrowRightLeft })],
  templateUrl: './party-relationships.page.html',
  styleUrl: './party-relationships.page.css',
})
export class PartyRelationshipsPage {
  private readonly route = inject(ActivatedRoute);

  partyType = toSignal(this.route.parent!.data.pipe(map((d) => d['party'].type as PartyType)));

  relationships = input.required<RelationshipDetails>();
}
