import { Component, input } from '@angular/core';
import { Relationship } from '../../../../types/party';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../../../reusable-components/table/talpay-table.component';
import { Column } from '../../../../reusable-components/table/types';

@Component({
  selector: 'app-service-company-relationships',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './service-company-relationships.component.html',
  styleUrl: './service-company-relationships.component.css',
})
export class ServiceCompanyRelationships {
  readonly columns: Column[] = [
    { key: 'name', display: 'Name' },
    { key: 'partyId', display: 'Party ID' },
    { key: 'status', display: 'Status' },
  ];

  relationships = input.required<Relationship[]>();
}
