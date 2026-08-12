import { Component, effect, input } from '@angular/core';
import { Request} from '../../../types/request'
@Component({
  selector: 'app-party-request-page',
  imports:[],
  templateUrl: 'app-party-requests.page.html'
})
export class PartyRequestsPage{
  requests = input.required<Request[]>();

  constructor() {
    effect(() => {
      console.log(`requests loaded ${(this.requests() as Request[])}`)
    })
  }
}
