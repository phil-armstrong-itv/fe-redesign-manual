import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../../types/request';

@Service()
export class RequestSearchService {
  private readonly http = inject(HttpClient);

  requestSearch(partyId:string): Observable<Request[]> {
    return this.http.get<Request[]>('http://localhost:3100/api/requestSearch/' + partyId );
  }
}
