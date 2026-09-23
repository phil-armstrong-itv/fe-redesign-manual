import { Component, input } from '@angular/core';
import { UkPaymentDetails as ASDF } from '../../../types/party';
import { LabelledItem } from '../../../reusable-components/labelled-item/labelled-item';
import { LabelledBoolean } from '../../../reusable-components/labelled-boolean/labelled-boolean';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye } from '@ng-icons/lucide';

@Component({
  selector: 'uk-bank-account-details',
  templateUrl: './uk-bank-account-details.component.html',
  styleUrl: './uk-bank-account-details.component.css',
  providers: [provideIcons({ lucideEye })],
  imports: [LabelledItem, LabelledBoolean, NgIcon],
})
export class UkBankAccountDetails {
  paymentDetails = input.required<ASDF>();
}
