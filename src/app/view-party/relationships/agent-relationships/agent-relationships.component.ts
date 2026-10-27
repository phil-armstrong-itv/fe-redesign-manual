import { Component, input } from '@angular/core';
import { Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../../reusable-components/table/talpay-table.component';
import { Column } from '../../../../reusable-components/table/types';

@Component({
  selector: 'app-agent-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './agent-relationships.component.html',
  styleUrl: './agent-relationships.component.css',
})
export class AgentRelationships {
  readonly columns: Column[] = [
    { key: 'name', display: 'Name' },
    { key: 'partyId', display: 'Party ID' },
    { key: 'status', display: 'Status' },
  ];

  relationships = input.required<Relationship[]>();
}
