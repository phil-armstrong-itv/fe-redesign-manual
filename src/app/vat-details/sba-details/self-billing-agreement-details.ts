import { Component, input } from '@angular/core';
import { HlmCaption, HlmTable, HlmTableContainer, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr } from '@spartan-ng/helm/table';
import { SbaDetails } from '../../../types/party';
import { DatePipe } from '@angular/common';
import { lucideCheck, lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { TalpayTable } from '../../../reusable-components/table/talpay-table.component';

@Component({
  selector: 'sba-details',
  templateUrl: './self-billing-agreement-details.html',
  styleUrl: './self-billing-agreement-details.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [
    HlmTBody,
    HlmTHead,
    HlmTable,
    HlmTableContainer,
    HlmTd,
    HlmTh,
    HlmTr,
    DatePipe,
    NgIcon,
    TalpayTable,
  ],
})
export class SelfBillingAgreementDetails {
  sbas = input.required<SbaDetails[]>();
}
