import { Component, computed, inject, input } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { HlmTabs, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { Agent, Contributor, Party, ServiceCompany } from '../../types/party';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { lucideSkull } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-view-party-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HlmTabsList, HlmTabs, HlmTabsTrigger, NgIcon],
  providers: [provideIcons({ lucideSkull })],
  templateUrl: './view-party.page.html',
  styleUrl: './view-party.page.css',
})
export class ViewPartyPage {
  private static readonly TABS = [
    'relationships',
    'engagements',
    'requests',
    'payments',
    'debt',
    'advances',
    'history',
  ];
  private readonly router = inject(Router);

  party = input.required<Party>();
  type = computed(() => this.party().type);
  isDeceased = computed(() => this.type() === 'contributor' && !!(this.party() as Contributor).deceasedDate);
  partyId = computed(() => this.party().id);
  partyName = computed(() => {
    const party = this.party();
    switch (party.type) {
      case 'contributor': {
        const contributor = this.party() as Contributor;
        return `${contributor.demographicDetails.names.first} ${contributor.demographicDetails.names.last}`;
      }
      case 'serviceCompany':
      case 'agent': {
        const serviceCompanyOrAgent = this.party() as ServiceCompany | Agent;
        return serviceCompanyOrAgent.demographicDetails.name;
      }
    }
  });

  activeTab = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => this.getTabFromUrl(e.urlAfterRedirects)),
    ),
    { initialValue: this.getTabFromUrl(this.router.url) },
  );

  private getTabFromUrl(url: string): string {
    const lastSegment = url.split('/').pop() ?? '';
    return ViewPartyPage.TABS.includes(lastSegment) ? lastSegment : 'summary';
  }
}
