import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Debt } from '../../../types/debt';
import { inject } from '@angular/core';
import { DebtService } from '../../services/debt.service';

export const debtResolver: ResolveFn<Debt[]> = (route: ActivatedRouteSnapshot,) => {
  const debtService = inject(DebtService);
  const partyId = route.paramMap.get('partyId')!;
  return debtService.getDebtForParty(partyId);
};
