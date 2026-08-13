import { HttpClient } from '@angular/common/http';
import { Debt } from '../../types/debt';
import { inject, Service } from '@angular/core';
@Service()
export class DebtService {
  private readonly http = inject(HttpClient);
  private debtSearchUrl = 'http://localhost:3100/api/debt';

  getDebtForParty(partyId: string) {
    return this.http.get<Debt[]>(this.debtSearchUrl + '/' + partyId);
  }
}
