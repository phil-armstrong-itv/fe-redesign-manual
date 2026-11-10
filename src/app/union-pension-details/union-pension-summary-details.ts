import { Component, input, signal } from '@angular/core';
import { UnionPensionDetails } from '../../types/party';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { TalpayCell } from '../../reusable-components/table/talpay-cell.directive';
import { TalpayTable } from '../../reusable-components/table/talpay-table.component';
import { Column } from '../../reusable-components/table/types';
import { lucideCheck, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'union-pension-summary-details',
  templateUrl: './union-pension-summary-details.html',
  styleUrl: './union-pension-summary-details.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [NgIcon, TalpayCell, TalpayTable],
})
export class UnionPensionSummaryDetails {
  unionPensionDetails = input.required<UnionPensionDetails[]>();

  columns = signal<Column[]>([
    {
      key: 'name',
      display: 'Name',
    },
    {
      key: 'enrolled',
      display: 'Enrolled',
    },
    {
      key: 'pensionNumber',
      display: 'Pension Number',
    },
  ]);
}
