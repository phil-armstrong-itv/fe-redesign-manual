import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EngagementSearchService } from '../../services/engagement-search.service';
import { Engagement } from '../../../types/engagement';

export const engagementSearchResolver: ResolveFn<Engagement[]> = (route: ActivatedRouteSnapshot) => {
  const engagementSearchService = inject(EngagementSearchService);
  const partyId = route.paramMap.get('partyId')!;
  return engagementSearchService.engagementSearch(partyId);
};
