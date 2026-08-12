import { Routes } from '@angular/router';
import { PartySummaryPage } from './summary/party-summary.page';
import { partySummaryResolver } from './summary/party-summary.resolver';
import { PartyEngagementsPage } from './engagements/party-engagements.page';
import { PartyHistoryPage } from './history/party-history.page';
import { PartyPaymentsPage } from './payments/party-payments.page';
import { PartyDebtPage } from './debt/party-debt.page';
import { PartyRelationshipsPage } from './relationships/party-relationships.page';
import { ViewPartyPage } from './view-party.page';

export const routes: Routes = [
  {
    path: '',
    component: ViewPartyPage,
    resolve: {
      party: partySummaryResolver,
    },
    children: [
      {
        path: '',
        component: PartySummaryPage,
      },
      {
        path: 'engagements',
        component: PartyEngagementsPage,
        resolve: {
          // TODO create resolver to load engagements
        },
      },
      {
        path: 'debt',
        component: PartyDebtPage,
        resolve: {
          // TODO create resolver to load debt
        },
      },
      {
        path: 'history',
        component: PartyHistoryPage,
        resolve: {
          // TODO create resolve to load party history
        },
      },
      {
        path: 'payments',
        component: PartyPaymentsPage,
        resolve: {
          // TODO create resolve to load payments
        },
      },
      {
        path: 'relationships',
        component: PartyRelationshipsPage,
        resolve: {
          // TODO create resolve to load relationships
        },
      },
    ],
  },
];
