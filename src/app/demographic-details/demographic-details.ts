import { Component, computed, input } from '@angular/core';
import { ContributorDemographicDetails } from '../../types/party';
import { LabelledData } from '../../reusable-components/labelled-item/types';
import { LabelledItemContainer } from '../../reusable-components/labelled-item-container/labelled-item-container';

@Component({
  selector: 'demographic-details',
  templateUrl: './demographic-details.html',
  styleUrl: './demographic-details.css',
  imports: [LabelledItemContainer],
})
export class DemographicDetails {
  demographicDetails = input.required<ContributorDemographicDetails>();

  partyName = computed(
    () => this.demographicDetails().names.first + ' ' + this.demographicDetails().names.last,
  );
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

  labelledItems = computed(() => {
    return [
      {
        key: 'name',
        display: 'Name',
        value: this.partyName(),
      },
      {
        key: 'stageName',
        display: 'Stage Name',
        value: this.demographicDetails().names.stage,
      },
      {
        key: 'homeAddress',
        display: 'Home Address',
        value: this.fullAddress(),
      },
      {
        key: 'dateOfBirth',
        display: 'Date of Birth',
        value: this.demographicDetails().dateOfBirth,
      },
      {
        key: 'contactNumber',
        display: 'Contact Number',
        value: this.demographicDetails().contactNumber,
      },
      {
        key: 'primaryEmailAddress',
        display: 'Primary Email Address',
        value: this.demographicDetails().emails.primary,
      },
      {
        key: 'vatEmailAddress',
        display: 'VAT Email Address',
        value: this.demographicDetails().emails.vat,
      },
      {
        key: 'payDocumentsEmailAddress',
        display: 'Pay Documents Email Address',
        value: this.demographicDetails().emails.payDocuments,
      },
      {
        key: 'nationInsuranceNumber',
        display: 'Nation Insurance Number',
        value: this.demographicDetails().niNumber,
      },
      {
        key: 'gtvapId',
        display: 'GTVAP Id',
        value: this.demographicDetails().gtvapId,
      },
    ];
  });
}
