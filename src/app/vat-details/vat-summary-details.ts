import { Component, input } from '@angular/core';
import { VatDetails } from '../../types/party';
import { LabelledItem } from '../../reusable-components/labelled-item/labelled-item';
import { LabelledDate } from '../../reusable-components/labelled-date/labelled-date';
import { SelfBillingAgreementDetails } from './sba-details/self-billing-agreement-details';

@Component({
  selector: 'vat-summary-details',
  templateUrl: './vat-summary-details.html',
  styleUrl: './vat-summary-details.css',
  imports: [
    LabelledItem,
    LabelledDate,
    SelfBillingAgreementDetails,
  ],
})
export class VatSummaryDetails {
  vatDetails = input.required<VatDetails>();
}
