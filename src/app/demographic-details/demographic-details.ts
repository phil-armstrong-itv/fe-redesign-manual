import { Component, input } from '@angular/core';
import { isNil } from "lodash";
import { ContributorDemographicDetails } from '../../types/party';

@Component({
  selector: 'demographic-details',
  templateUrl: './demographic-details.html',
  styleUrl: './demographic-details.css',
})
export class DemographicDetails {
  demographicDetails = input.required<ContributorDemographicDetails>();

  getPartyName() {
    return this.demographicDetails().names.first + " " + this.demographicDetails().names.last;
  }

  getFullAddress(separator = ", "): string {
    let address = '';
    const addressEntity = this.demographicDetails().address;
    if (!isNil(addressEntity)) {
      address += addressEntity.line1 ? addressEntity.line1 : "";
      address += addressEntity.line2 ? separator + addressEntity.line2 : "";
      address += addressEntity.line3 ? separator + addressEntity.line3 : "";
      address += addressEntity.town ? separator + addressEntity.town : "";
      address += addressEntity.postcode ? separator + addressEntity.postcode : "";
      address += addressEntity.country ? separator + addressEntity.country : "";
      return address.trim();
    }
    return address;
  }
}
