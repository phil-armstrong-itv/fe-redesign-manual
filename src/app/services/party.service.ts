import { Contributor } from '../../types/party';
import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class PartyService {
  private readonly http = inject(HttpClient);

  findByPartyId(partyId: string): Observable<Contributor> {
    return this.http.get<Contributor>('http://localhost:3100/api/party/' + partyId);
  }
}
