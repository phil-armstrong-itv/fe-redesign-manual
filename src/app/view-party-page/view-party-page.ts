import { Accordion } from '../accordion/accordion';
import { Component, input, effect } from '@angular/core';
import { Contributor, Party } from '../../types/party';

@Component({
  selector: 'app-view-party-page',
  imports: [Accordion],
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
