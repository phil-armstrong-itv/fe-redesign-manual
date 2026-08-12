import { inject } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Party } from '../../../types/party';
import { PartyService } from '../../services/party.service';

export const partySummaryResolver: ResolveFn<Party> = (route: ActivatedRouteSnapshot,) => {
  const partyService = inject(PartyService);
  const partyId = route.paramMap.get('partyId')!;
  return partyService.findByPartyId(partyId);
};
