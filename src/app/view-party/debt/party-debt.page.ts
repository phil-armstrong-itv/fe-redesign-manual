import { Component, input, computed } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { TalpayTable } from '../../../reusable-components/table/talpay-table.component';
import { Debt } from '../../../types/debt';
import { HlmDrawerImports } from '@spartan-ng/helm/drawer';
import { lucidePlus, lucideSave, lucideDelete } from '@ng-icons/lucide';
import { PartyDebtForm } from './debt-form/party-debt-form.component';
import { Column } from '../../../reusable-components/table/types';


@Component({
  selector: 'app-party-debt-page',
  imports: [
    HlmButton,
    NgIcon,
    HlmDrawerImports,
    TalpayTable,
    PartyDebtForm,
  ],
  providers: [provideIcons({ lucidePlus, lucideSave, lucideDelete })],
  templateUrl: './party-debt.page.html',
  styleUrl: './party-debt.page.css',
})
export class PartyDebtPage {
  partyDebts = input.required<Debt[]>();
  currentDebt = computed(() => this.partyDebts().reduce((acc, debt) => acc + debt.amount, 0));

  columns: Column[] = [
    { key: 'type', display: 'Type' },
    { key: 'date', display: 'Date' },
    { key: 'amount', display: 'Amount' },
    { key: 'refNo', display: 'Reference No' },
    { key: 'programme', display: 'Programme' },
    { key: 'createdBy', display: 'Created By' },
    { key: 'description', display: 'Description' },
  ];
}
