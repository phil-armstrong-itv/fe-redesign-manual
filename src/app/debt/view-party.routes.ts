import { Routes } from '@angular/router';
import { PartySummaryPage } from './summary/party-summary.page';
import { partySummaryResolver } from './summary/party-summary.resolver';
import { PartyRelationshipsPage } from './relationships/party-relationships.page';

export const routes: Routes = [
  {
    path: '',
    component: PartySummaryPage,
    resolve: {
      party: partySummaryResolver,
    },
  },
  {
    path: 'relationships',
    component: PartyRelationshipsPage,
    resolve: {
      // party: partySummaryResolver, TODO create resolve to load existing relationships
    },
  },
];
