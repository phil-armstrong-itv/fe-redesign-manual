import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ViewPartyPage } from './view-party-page/view-party-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'party/:partyId',
    component: ViewPartyPage,
  },
];
