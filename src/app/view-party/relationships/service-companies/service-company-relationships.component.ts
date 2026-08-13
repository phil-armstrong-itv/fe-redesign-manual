import { Component, input } from '@angular/core';
import { Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../commonComponents/table/talpay-table.component';

@Component({
  selector: 'app-service-company-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './service-company-relationships.component.html',
  styleUrl: './service-company-relationships.component.css',
})
export class ServiceCompanyRelationships {
  readonly columns = ['name', 'partyId', 'status'];

  relationships = input.required<Relationship[]>();
}
