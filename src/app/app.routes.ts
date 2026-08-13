import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { RequestSearchPage } from './requestSearch/request-search.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'party/:partyId',
    loadChildren: () => import('./view-party/view-party.routes').then(m => m.routes),
  },
  {
    path:'search-requests',
    component: RequestSearchPage
  }
];
