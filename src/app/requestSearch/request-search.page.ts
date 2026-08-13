import { Component, signal } from '@angular/core';
import { Request } from '../../types/request';
import { RequestSearchService } from '../services/request-search.service';
import { TalpayTable } from '../commonComponents/table/talpay-table.component';


@Component({
  selector: 'request-search',
  templateUrl: 'request-search.page.html',
  imports: [TalpayTable],
})
export class RequestSearchPage {
  columns = [
    'referenceNo',
    'requestedDate',
    'formType',
    'contributorParty',
    'payeeParty',
    'workGroup',
    'programmeName',
    'total',
    'status',
  ];
  displayRequests = signal<Request[]>([]);

  searchEvent(searchString: string) {
    console.log(searchString);
    var queryParam = 'requestReference=' + searchString;

    this.requestSearchService.requestSearchWithQueryParams(queryParam).subscribe((newRequests) => {
      this.displayRequests.set(newRequests);
    });
  }

  constructor(private requestSearchService: RequestSearchService) {
    this.displayRequests.set([]);
  }
}
