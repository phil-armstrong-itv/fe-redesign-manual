import { Component, input } from '@angular/core';
import { Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../commonComponents/table/talpay-table.component';

@Component({
  selector: 'app-agent-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './agent-relationships.component.html',
  styleUrl: './agent-relationships.component.css',
})
export class AgentRelationships {
  readonly columns = ['name', 'partyId', 'status'];

  relationships = input.required<Relationship[]>();
}
