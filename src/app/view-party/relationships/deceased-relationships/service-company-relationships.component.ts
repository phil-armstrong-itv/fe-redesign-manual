import { Component, input } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../commonComponents/table/talpay-table.component';
import { DeceasedRelationshipDetails } from '../../../../types/party';

@Component({
  selector: 'app-deceased-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './service-company-relationships.component.html',
  styleUrl: './service-company-relationships.component.css',
})
export class DeceasedRelationships {
  readonly columns = ['name', 'partyId', 'partyType', 'relationship', 'status', 'endDate'];

  relationships = input.required<DeceasedRelationshipDetails[]>();
}
