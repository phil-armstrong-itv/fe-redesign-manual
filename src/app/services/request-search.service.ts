import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../../types/request';
import { Payment } from '../../types/payment';

@Service()
export class RequestSearchService {
  private readonly http = inject(HttpClient);
  private  requestSearchURL = 'http://localhost:3100/api/requestSearch';
  requestSearch(partyId:string): Observable<Request[]> {
    return this.http.get<Request[]>( this.requestSearchURL + '/' + partyId );
  }

  requestSearchWithQueryParams(queryString: string): Observable<Request[]> {
    return this.http.get<Request[]>( this.requestSearchURL + '?' + queryString);
  }
}
