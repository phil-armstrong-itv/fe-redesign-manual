import { Component, effect, input, signal } from '@angular/core';
import { Request} from '../../../types/request'
import { TalpayTable } from '../../commonComponents/table/talpay-table.component';

import { RequestSearchService } from '../../services/request-search.service';
@Component({
  selector: 'app-party-request-page',
  imports: [TalpayTable],
  templateUrl: 'app-party-requests.page.html',
})
export class PartyRequestsPage {
  requests = input.required<Request[]>();
  displayRequests = signal<Request[]>([]);
  columns = ['referenceNo', 'requestedDate','formType','contributorParty','payeeParty','workGroup','programmeName', 'total', 'status']

  searchEvent(searchString: string) {
  console.log(searchString);
    var queryParam = 'requestReference='+ searchString;

    this.requestSearchService.requestSearchWithQueryParams(queryParam).subscribe(newRequests => {
      this.displayRequests.set(newRequests);
    })
  }

  constructor(private requestSearchService: RequestSearchService) {
    effect(() => {
     this.displayRequests.set(this.requests())
    });
  }
}
