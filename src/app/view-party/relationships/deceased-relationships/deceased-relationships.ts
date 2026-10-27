import { Component, input } from '@angular/core';
import { TalpayTable } from '../../../../reusable-components/table/talpay-table.component';
import { DeceasedRelationshipDetails } from '../../../../types/party';
import { Column } from '../../../../reusable-components/table/types';

@Component({
  selector: 'app-deceased-relationships',
  imports: [TalpayTable],
  templateUrl: './deceased-relationships.html',
  styleUrls: ['./deceased-relationships.css'],
})
export class DeceasedRelationships {
  readonly columns: Column[] = [
    { key: 'name', display: 'Name' },
    { key: 'partyId', display: 'Party ID' },
    { key: 'partyType', display: 'Party Type' },
    { key: 'relationship', display: 'Relationship' },
    { key: 'status', display: 'Status' },
    { key: 'endDate', display: 'End Date' },
  ];

  relationships = input.required<DeceasedRelationshipDetails[]>();
}
