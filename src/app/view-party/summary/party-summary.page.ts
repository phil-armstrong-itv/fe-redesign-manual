import { Accordion } from '../../accordion/accordion';
import { Component, input, effect } from '@angular/core';
import { HideInfo } from '../../hideInfo/hide-info';
import { Contributor, Party } from '../../../types/party';
import { DemographicDetails } from '../../demographic-details/demographic-details';
import { PaymentSummaryDetails } from '../../payment-summary-details/payment-summary-details';

@Component({
  selector: 'app-party-summary-page',
  imports: [Accordion, HideInfo, DemographicDetails, PaymentSummaryDetails],
  templateUrl: './party-summary.page.html',
  styleUrl: './party-summary.page.css',
})
export class PartySummaryPage {
  party = input.required<Party>();

  constructor() {
    effect(() => {
      console.log(`Party loaded: ${(this.party() as Contributor).demographicDetails.names.first}`);
    });
  }

  getContributorParty(): Contributor {
    return this.party() as Contributor;
  }
}
