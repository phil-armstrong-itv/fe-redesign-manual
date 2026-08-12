import { Accordion } from '../accordion/accordion';
import { Component, input, effect } from '@angular/core';
import { Contributor, Party } from '../../types/party';
import { HideInfo } from '../hideInfo/hide-info';
import { DemographicDetails } from '../demographic-details/demographic-details';

@Component({
  selector: 'app-view-party-page',
  imports: [Accordion, DemographicDetails, HideInfo],
  templateUrl: './view-party-page.html',
  styleUrl: './view-party-page.css',
})
export class ViewPartyPage {
  party = input.required<Party>();

  constructor() {
    effect(() => {
      console.log(`Party loaded: ${(this.party() as Contributor).demographicDetails.names.first}`);
    });
  }
}
