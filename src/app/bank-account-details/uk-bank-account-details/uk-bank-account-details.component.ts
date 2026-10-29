import { Component, computed, input, signal } from '@angular/core';
import { UkPaymentDetails as ASDF } from '../../../types/party';
import { LabelledItemContainer } from '../../../reusable-components/labelled-item-container/labelled-item-container';

@Component({
  selector: 'uk-bank-account-details',
  templateUrl: './uk-bank-account-details.component.html',
  styleUrl: './uk-bank-account-details.component.css',
  imports: [LabelledItemContainer],
})
export class UkBankAccountDetails {
  paymentDetails = input.required<ASDF>();
  partyId = input.required<string>();
  asdf = signal<string | undefined>(undefined);
  displayedBankAccountNumber = computed(() => {
    if (this.asdf() !== undefined) {
      return this.asdf();
    }
    return this.paymentDetails().accountNumber;
  });

  protected updateDisplayedBankAccountNumber(bankAccountNumber: string | undefined) {
    this.asdf.set(bankAccountNumber);
  }

  labelledItems = computed(() => {
    return [
      {
        key: 'paymentType',
        display: 'Payment Type',
        value: 'UK E-payment',
      },
      {
        key: 'accountName',
        display: 'Account Name',
        value: this.paymentDetails().accountName,
      },
      {
        key: 'bankName',
        display: 'Bank Name',
        value: this.paymentDetails().bankName,
      },
      {
        key: 'accountNumber',
        display: 'Account Number',
        value: this.paymentDetails().accountNumber,
      },
      {
        key: 'sortCode',
        display: 'Sort Code',
        value: this.paymentDetails().sortCode,
      },
      {
        key: 'rollNumber',
        display: 'Roll Number',
        value: this.paymentDetails().rollNumber,
      },
      {
        key: 'onHold',
        display: 'On Hold',
        value: this.paymentDetails().onHold,
      },
    ];
  });
}
