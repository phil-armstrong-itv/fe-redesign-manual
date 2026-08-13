import { Party, RelationshipDetails } from '../../types/party';
import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class PartyService {
  private readonly http = inject(HttpClient);

  findByPartyId(partyId: string): Observable<Party> {
    return this.http.get<Party>('http://localhost:3100/api/party/' + partyId);
  }

  getRelationshipsForParty(partyId: string): Observable<RelationshipDetails> {
    return this.http.get<RelationshipDetails>('http://localhost:3100/api/party/' + partyId + '/relationships');
  }
}
