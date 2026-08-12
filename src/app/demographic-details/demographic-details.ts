import { Component, input } from '@angular/core';
import { ContributorDemographicDetails, Party } from '../../types/party';

@Component({
  selector: 'demographic-details',
  templateUrl: './demographic-details.html',
  styleUrl: './demographic-details.css',
})
export class DemographicDetails {
  demographicDetails = input.required<ContributorDemographicDetails>();
}
