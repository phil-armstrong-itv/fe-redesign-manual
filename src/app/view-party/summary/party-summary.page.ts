import { Accordion } from '../../accordion/accordion';
import { Component, input, effect } from '@angular/core';
import { HideInfo } from '../../hideInfo/hide-info';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { Contributor, Party } from '../../../types/party';

@Component({
  selector: 'app-party-summary-page',
  imports: [Accordion, HideInfo, HlmTabsList, HlmTabs, HlmTabsTrigger, HlmTabsContent],
  templateUrl: './view-party-page.html',
  styleUrl: './view-party-page.css',
})
export class PartySummaryPage {
  party = input.required<Party>();

  constructor() {
    effect(() => {
      console.log(`Party loaded: ${(this.party() as Contributor).demographicDetails.names.first}`);
    });
  }
}
