import { Component, effect, input, signal } from '@angular/core';
import { Payment } from '../../../types/payment';
import { TalpayTable } from '../../commonComponents/table/talpay-table.component';
import { PaymentSearchService } from '../../services/payment-search.service';
import { Filter } from '../../../types/filter';

@Component({
  selector: 'app-party-relationships-page',
  imports: [TalpayTable],
  templateUrl: './party-payments.page.html',
  styleUrl: './party-payments.page.css',
})
export class PartyPaymentsPage {
  payments = signal<Payment[]>([]);
  partyPayments = input.required<Payment[]>();

  columns = [
    'datePaid',
    'paymentMethod',
    'paymentReference',
    'payee',
    'payeeType',
    'amount',
    'status',
  ]

  filters: Filter[] = [
    {
      label: 'Payment Reference',
      value: 'paymentReference'
    }
  ]

  searchEvent(searchString: string) {
    console.log(searchString);
    var queryParam = 'paymentReference='+ searchString;
    this.paymentSearchService.paymentSearchWithQueryParams(queryParam).subscribe(newPayments => {
      this.payments.set(newPayments);
    });
  }

  constructor(private paymentSearchService: PaymentSearchService) {
    effect(() => {
      this.payments.set(this.partyPayments());
    });


  }
}
