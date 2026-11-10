import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../../types/request';
import { Engagement } from '../../types/engagement';

@Service()
export class EngagementSearchService {
  private readonly http = inject(HttpClient);
  private  engagementSearchURL = 'http://localhost:3100/api/engagementSearch';
  engagementSearch(partyId:string): Observable<Engagement[]> {
    return this.http.get<Engagement[]>(this.engagementSearchURL + '/' + partyId);
  }
}
