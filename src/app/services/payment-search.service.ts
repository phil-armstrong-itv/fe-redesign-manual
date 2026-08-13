import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../types/payment';

@Service()
export class PaymentSearchService {
  private readonly http = inject(HttpClient);

  paymentSearch(partyId:string): Observable<Payment[]> {
    return this.http.get<Payment[]>('http://localhost:3100/api/paymentSearch/' + partyId );
  }
}
