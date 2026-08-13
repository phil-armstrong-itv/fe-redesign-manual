import { Component, signal, input, effect } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon } from '@ng-icons/core';
import { TalpayTable } from '../../commonComponents/table/talpay-table.component';
import { Debt } from '../../../types/debt';

@Component({
  selector: 'app-party-debt-page',
  imports: [HlmButton, NgIcon, TalpayTable],
  templateUrl: './party-debt.page.html',
  styleUrl: './party-debt.page.css',
})
export class PartyDebtPage {
  currentDebt = 1000000;
  debts = signal<Debt[]>([]);
  partyDebts = input.required<Debt[]>();

  columns = ['type', 'date', 'amount', 'refNo', 'programme', 'createdBy', 'description'];

  constructor() {

    effect(() => {
      this.debts.set(this.partyDebts())
    })
  }

}
