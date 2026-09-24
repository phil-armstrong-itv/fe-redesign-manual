import { Component, computed, input, signal } from '@angular/core';
import { UkPaymentDetails as ASDF } from '../../../types/party';
import { LabelledItem } from '../../../reusable-components/labelled-item/labelled-item';
import { LabelledBoolean } from '../../../reusable-components/labelled-boolean/labelled-boolean';
import { ObfuscateBankAccountNumber } from '../obfuscate-bank-account-number/obfuscate-bank-account-number';

@Component({
  selector: 'uk-bank-account-details',
  templateUrl: './uk-bank-account-details.component.html',
  styleUrl: './uk-bank-account-details.component.css',
  imports: [LabelledItem, LabelledBoolean, ObfuscateBankAccountNumber],
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
}
