import { Component, computed, input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HlmTabs, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { Agent, Contributor, Party, ServiceCompany } from '../../types/party';

@Component({
  selector: 'app-view-party-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HlmTabsList, HlmTabs, HlmTabsTrigger],
  templateUrl: './view-party.page.html',
  styleUrl: './view-party.page.css',
})
export class ViewPartyPage {
  party = input.required<Party>();
  partyId = computed(() => this.party().id);
  partyType = computed(() => this.party().type);
  partyName = computed(() => {
    const party = this.party();
    switch (party.type) {
      case 'contributor':
        {
          const contributor = this.party() as Contributor;
          return `${contributor.demographicDetails.names.first} ${contributor.demographicDetails.names.last}`;
        }
      case 'serviceCompany':
      case 'agent':
        {
          const serviceCompanyOrAgent = this.party() as ServiceCompany | Agent;
          return serviceCompanyOrAgent.demographicDetails.name;
        }
    }
  });
}
