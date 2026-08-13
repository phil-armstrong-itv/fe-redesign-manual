import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Payment } from '../../../types/payment';
import { PaymentSearchService } from '../../services/payment-search.service';

export const paymentSearchResolver: ResolveFn<Payment[]> = (route: ActivatedRouteSnapshot,) => {
  const paymentSearchService = inject(PaymentSearchService);
  const partyId = route.paramMap.get('partyId')!;
  return paymentSearchService.paymentSearchForParty(partyId);
};
