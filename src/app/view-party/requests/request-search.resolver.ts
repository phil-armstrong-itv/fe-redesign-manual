import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Request } from '../../../types/request';
import { RequestSearchService } from '../../services/request-search.service';
import { inject } from '@angular/core';

export const requestSearchResolver: ResolveFn<Request[]> = (route: ActivatedRouteSnapshot,) => {
  const requestSearchService = inject(RequestSearchService);
  const partyId = route.paramMap.get('partyId')!;
  return requestSearchService.requestSearch(partyId);
};
