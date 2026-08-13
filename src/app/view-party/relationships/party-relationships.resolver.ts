import { inject } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { RelationshipDetails } from '../../../types/party';
import { PartyService } from '../../services/party.service';

export const partyRelationshipsResolver: ResolveFn<RelationshipDetails> = (route: ActivatedRouteSnapshot,) => {
  const partyService = inject(PartyService);
  const partyId = route.paramMap.get('partyId')!;
  return partyService.getRelationshipsForParty(partyId);
};
