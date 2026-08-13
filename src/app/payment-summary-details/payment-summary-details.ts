import { Component, input } from '@angular/core';
import { InternationalPaymentDetails, PaymentDetails, SepaPaymentDetails, UkPaymentDetails } from '../../types/party';
import { HideInfo } from '../hideInfo/hide-info';

@Component({
  selector: 'payment-summary-details',
  templateUrl: './payment-summary-details.html',
  styleUrl: './payment-summary-details.css',
  imports: [
    HideInfo
  ]
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
