import { Component, input } from '@angular/core';
import { TalpayTable } from '../../../../reusable-components/table/talpay-table.component';
import { DeceasedRelationshipDetails } from '../../../../types/party';

@Component({
  selector: 'app-deceased-relationships',
  imports: [TalpayTable],
  templateUrl: './deceased-relationships.html',
  styleUrls: ['./deceased-relationships.css'],
})
export class DeceasedRelationships {
  readonly columns = ['name', 'partyId', 'partyType', 'relationship', 'status', 'endDate'];

  relationships = input.required<DeceasedRelationshipDetails[]>();
}
