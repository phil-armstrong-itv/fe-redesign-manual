import { Component, input, Signal, signal } from '@angular/core';
import { Column } from '../../../reusable-components/table/types';
import { TalpayTable } from '../../../reusable-components/table/talpay-table.component';
import { Request } from '../../../types/request';
import { Engagement } from '../../../types/engagement';

@Component({
  selector: 'app-party-engagements-page',
  imports: [TalpayTable],
  templateUrl: './party-engagements.page.html',
  styleUrl: './party-engagements.page.css',
})
export class PartyEngagementsPage {
  engagements = input.required<Engagement[]>();

  columns = signal<Column[]>([
    {
      key: 'referenceNumber',
      display: 'Reference Number',
    },
    {
      key: 'startDate',
      display: 'Start Date',
    },
    {
      key: 'endDate',
      display: 'End Date',
    },
    {
      key: 'type',
      display: 'Type',
    },
    {
      key: 'contributorName',
      display: 'Contributor',
    },
    {
      key: 'contracteeName',
      display: 'Contracted Party',
    },
    {
      key: 'payeeName',
      display: 'Payee',
    },
    {
      key: 'programmeName',
      display: 'Programme Name',
    },
    {
      key: 'totalPaid',
      display: 'Total Paid',
    },
    {
      key: 'status',
      display: 'Status',
    },
  ]);
}
