import { Accordion } from '../../accordion/accordion';
import { Component, input, effect } from '@angular/core';
import { Contributor, Party } from '../../../types/party';

@Component({
  selector: 'app-party-summary-page',
  imports: [Accordion],
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
}
