import { Component, signal } from '@angular/core';
import { Request } from '../../types/request';
import { RequestSearchService } from '../services/request-search.service';
import { TalpayTable } from '../../reusable-components/table/talpay-table.component';
import { Column } from '../../reusable-components/table/types';


@Component({
  selector: 'request-search',
  templateUrl: 'request-search.page.html',
  imports: [TalpayTable],
})
export class RequestSearchPage {
  columns: Column[] = [
    { key: 'referenceNo', display: 'Reference No' },
    { key: 'requestedDate', display: 'Requested Date' },
    { key: 'formType', display: 'Form Type' },
    { key: 'contributorParty', display: 'Contributor' },
    { key: 'payeeParty', display: 'Payee' },
    { key: 'workGroup', display: 'Work Group' },
    { key: 'programmeName', display: 'Programme' },
    { key: 'total', display: 'Total' },
    { key: 'status', display: 'Status' },
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
