import { Component, input, signal } from '@angular/core';
import { SbaDetails } from '../../../types/party';
import { TitleCasePipe } from '@angular/common';
import { lucideCheck, lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { TalpayTable } from '../../../reusable-components/table/talpay-table.component';
import { TalpayCell } from '../../../reusable-components/table/talpay-cell.directive';
import { Column } from '../../../reusable-components/table/types';

@Component({
  selector: 'sba-details',
  templateUrl: './self-billing-agreement-details.html',
  styleUrl: './self-billing-agreement-details.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [NgIcon, TalpayTable, TalpayCell, TitleCasePipe],
})
export class SelfBillingAgreementDetails {
  columns = signal<Column[]>([
    {
      key: 'startDate',
      display: 'Start Date',
    },
    {
      key: 'endDate',
      display: 'End Date',
    },
    {
      key: 'status',
      display: 'Status',
    }
  ]);

  sbas = input.required<SbaDetails[]>();


}
