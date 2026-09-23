import { Component, computed, input } from '@angular/core';
import { ContributorDemographicDetails } from '../../types/party';
import { LabelledItem } from '../../reusable-components/labelled-item/labelled-item';

@Component({
  selector: 'demographic-details',
  templateUrl: './demographic-details.html',
  styleUrl: './demographic-details.css',
  imports: [LabelledItem],
})
export class DemographicDetails {
  demographicDetails = input.required<ContributorDemographicDetails>();

  partyName = computed(() => this.demographicDetails().names.first + ' ' + this.demographicDetails().names.last);
  fullAddress = computed(() => {
    let address = this.demographicDetails().address;
    return [
      address.line1,
      address.line2,
      address.line3,
      address.town,
      address.postcode,
      address.country,
    ].join(', ');
  });
}
