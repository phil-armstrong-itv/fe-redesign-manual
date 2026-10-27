import { Component, input } from '@angular/core';
import { PartyType, Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../../reusable-components/table/talpay-table.component';
import { Column } from '../../../../reusable-components/table/types';

@Component({
  selector: 'app-contributor-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './contributor-relationships.component.html',
  styleUrl: './contributor-relationships.component.css',
})
export class ContributorRelationships {
  readonly columns: Column[] = [
    { key: 'name', display: 'Name' },
    { key: 'partyId', display: 'Party ID' },
    { key: 'status', display: 'Status' },
  ];

  relationships = input.required<Relationship[]>();
  partyType = input.required<PartyType>();
}
