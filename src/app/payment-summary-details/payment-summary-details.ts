import { Component, input } from '@angular/core';
import { InternationalPaymentDetails, PaymentDetails, SepaPaymentDetails, UkPaymentDetails } from '../../types/party';

@Component({
  selector: 'payment-summary-details',
  templateUrl: './payment-summary-details.html',
  styleUrl: './payment-summary-details.css',
})
export class PaymentSummaryDetails {
  paymentDetails = input.required<PaymentDetails>();

  getUkPaymentDetails(): UkPaymentDetails {
    return this.paymentDetails() as UkPaymentDetails;
  }

  getInternationalPaymentDetails() {
    return this.paymentDetails() as InternationalPaymentDetails;
  }

  getSepaPaymentDetails() {
    return this.paymentDetails() as SepaPaymentDetails;
  }
}
