import { Component, computed, input } from '@angular/core';
import { VatDetails } from '../../types/party';
import { LabelledItemContainer } from '../../reusable-components/labelled-item-container/labelled-item-container';
import { SelfBillingAgreementDetails } from './sba-details/self-billing-agreement-details';

@Component({
  selector: 'vat-summary-details',
  templateUrl: './vat-summary-details.html',
  styleUrl: './vat-summary-details.css',
  imports: [LabelledItemContainer, SelfBillingAgreementDetails],
})
export class VatSummaryDetails {
  vatDetails = input.required<VatDetails>();

  vatEligible = computed(() => this.vatDetails().status === 'eligible');

  labelledItems = computed(() => {
    if (this.vatEligible()) {
      return [
        {
          key: 'status',
          display: 'Vat Status',
          value: 'Eligible',
        },
        {
          key: 'vatNumber',
          display: 'Vat Number',
          value: this.vatDetails().vatNumber,
        },
        {
          key: 'startDate',
          display: 'Start Date',
          value: this.vatDetails().startDate,
        },
        {
          key: 'endDate',
          display: 'End Date',
          value: this.vatDetails().endDate,
        },
      ];
    } else {
      return [
        {
          key: 'status',
          display: 'Vat Status',
          value: 'Ineligible',
        },
      ];
    }
  });
}
