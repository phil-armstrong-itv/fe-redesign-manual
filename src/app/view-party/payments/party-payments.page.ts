import { Component, effect, input } from '@angular/core';
import { Payment } from '../../../types/payment';
import { Request } from '../../../types/request';
import { TalpayTable } from '../../commonComponents/table/talpay-table.component';

@Component({
  selector: 'app-party-relationships-page',
  imports: [TalpayTable],
  templateUrl: './party-payments.page.html',
  styleUrl: './party-payments.page.css',
})
export class PartyPaymentsPage {
  payments = input.required<Payment[]>();
  columns = [
    'datePaid',
    'paymentMethod',
    'paymentReference',
    'payee',
    'payeeType',
    'amount',
    'status',
  ];

  constructor() {
    effect(() => {
      console.log(`payment loaded ${this.payments() as Payment[]}`);
    });
  }
}
