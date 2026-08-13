import { Component, input } from '@angular/core';
import { VatDetails } from '../../types/party';

@Component({
  selector: 'vat-summary-details',
  templateUrl: './vat-summary-details.html',
  styleUrl: './vat-summary-details.css',
})
export class VatSummaryDetails {
  vatDetails = input.required<VatDetails>();
}
