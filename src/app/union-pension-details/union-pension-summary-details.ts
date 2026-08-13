import { Component, input } from '@angular/core';
import { UnionPensionDetails } from '../../types/party';
import { NgClass } from '@angular/common';

@Component({
  selector: 'union-pension-summary-details',
  templateUrl: './union-pension-summary-details.html',
  styleUrl: './union-pension-summary-details.css',
  imports: [
    NgClass
  ]
})
export class UnionPensionSummaryDetails {
  unionPensionDetails = input.required<UnionPensionDetails[]>();
}
