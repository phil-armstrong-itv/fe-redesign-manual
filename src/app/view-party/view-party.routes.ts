import { Routes } from '@angular/router';
import { PartySummaryPage } from './summary/party-summary.page';
import { partySummaryResolver } from './summary/party-summary.resolver';
import { PartyEngagementsPage } from './engagements/party-engagements.page';
import { PartyHistoryPage } from './history/party-history.page';
import { PartyPaymentsPage } from './payments/party-payments.page';
import { PartyDebtPage } from './debt/party-debt.page';
import { PartyRelationshipsPage } from './relationships/party-relationships.page';
import { ViewPartyPage } from './view-party.page';
import { PartyRequestsPage } from './requests/party-requests.page';
import { requestSearchResolver } from './requests/request-search.resolver';
import { PartyAdvancesPage } from './advances/party-advances-page.component';
import { paymentSearchResolver } from './payments/payment-search.resolver';

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
        data: {
          activeTab: 'summary',
        },
      },
      {
        path: 'advances',
        component: PartyAdvancesPage,
        data: {
          activeTab: 'advances',
        },
        resolve: {
          // TODO create resolver to load advances
        },
      },
      {
        path: 'engagements',
        component: PartyEngagementsPage,
        data: {
          activeTab: 'engagements',
        },
        resolve: {
          // TODO create resolver to load engagements
        },
      },
      {
        path: 'debt',
        component: PartyDebtPage,
        data: {
          activeTab: 'debt',
        },
        resolve: {
          // TODO create resolver to load debt
        },
      },
      {
        path: 'history',
        component: PartyHistoryPage,
        data: {
          activeTab: 'history',
        },
        resolve: {
          // TODO create resolve to load party history
        },
      },
      {
        path: 'requests',
        component: PartyRequestsPage,
        data: {
          activeTab: 'requests',
        },
        resolve: {
          requests: requestSearchResolver,
        },
      },
      {
        path: 'payments',
        component: PartyPaymentsPage,
        data: {
          activeTab: 'payments',
        },
        resolve: {
         payments: paymentSearchResolver
        },
      },
      {
        path: 'relationships',
        component: PartyRelationshipsPage,
        data: {
          activeTab: 'relationships',
        },
        resolve: {
          // TODO create resolve to load relationships
        },
      },
    ],
  },
];
