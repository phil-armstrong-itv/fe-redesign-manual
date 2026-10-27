import { Component, effect, input, signal } from '@angular/core';
import { Request} from '../../../types/request'
import { TalpayTable } from '../../../reusable-components/table/talpay-table.component';

import { RequestSearchService } from '../../services/request-search.service';
import { Filter } from '../../../types/filter';
import { Column } from '../../../reusable-components/table/types';
@Component({
  selector: 'app-party-request-page',
  imports: [TalpayTable],
  templateUrl: 'app-party-requests.page.html',
})
export class PartyRequestsPage {
  requests = input.required<Request[]>();
  displayRequests = signal<Request[]>([]);
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
  filters: Filter[] = [
    {
      label: 'Agent',
      value: 'agent'
    },
    {
      label: 'Date of Engagement',
      value: 'dateOfEngagement'
    },
    {
      label: 'Request Reference',
      value: 'requestReference'
    },
    {
      label: 'Status',
      value: 'status'
    }
  ];

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
