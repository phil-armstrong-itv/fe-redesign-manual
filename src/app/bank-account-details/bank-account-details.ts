import { Component, computed, input } from '@angular/core';
import { InternationalPaymentDetails, PaymentDetails, SepaPaymentDetails, UkPaymentDetails } from '../../types/party';
import { UkBankAccountDetails } from './uk-bank-account-details/uk-bank-account-details.component';

@Component({
  selector: 'payment-summary-details',
  templateUrl: './bank-account-details.html',
  styleUrl: './bank-account-details.css',
  imports: [ UkBankAccountDetails],
})
export class BankAccountDetails {
  partyId = input.required<string>();

  paymentDetails = input.required<PaymentDetails>();
  bankAccountType = computed(() => this.paymentDetails().type);
  ukPaymentDetails = computed(() => this.paymentDetails() as UkPaymentDetails);
  sepaPaymentDetails = computed(() => this.paymentDetails() as SepaPaymentDetails);
  internationalPaymentDetails = computed(() => this.paymentDetails() as InternationalPaymentDetails);
}
