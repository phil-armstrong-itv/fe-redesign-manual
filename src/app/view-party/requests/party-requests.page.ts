import { Component, effect, input } from '@angular/core';
import { Request} from '../../../types/request'
import { TalpayTable } from '../../commonComponents/table/talpay-table.component';
@Component({
  selector: 'app-party-request-page',
  imports: [TalpayTable],
  templateUrl: 'app-party-requests.page.html',
})
export class PartyRequestsPage {
  requests = input.required<Request[]>();

  columns = ['referenceNo', 'requestedDate','formType','contributorParty','payeeParty','workGroup','programmeName', 'total', 'status']
  constructor() {
    effect(() => {
      console.log(`requests loaded ${this.requests() as Request[]}`);
    });
  }
}
