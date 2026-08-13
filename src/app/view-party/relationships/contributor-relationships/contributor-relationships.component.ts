import { Component, input } from '@angular/core';
import { PartyType, Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../commonComponents/table/talpay-table.component';

@Component({
  selector: 'app-contributor-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './contributor-relationships.component.html',
  styleUrl: './contributor-relationships.component.css',
})
export class ContributorRelationships {
  readonly columns = ['name', 'partyId', 'status'];

  relationships = input.required<Relationship[]>();
  partyType = input.required<PartyType>();
}
