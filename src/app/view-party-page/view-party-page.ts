import { Component } from '@angular/core';
import { Accordion } from '../accordion/accordion';
import { DemographicDetails } from '../demographic-details/demographic-details';

@Component({
  selector: 'app-view-party-page',
  imports: [Accordion, DemographicDetails],
  templateUrl: './view-party-page.html',
  styleUrl: './view-party-page.css',
})
export class ViewPartyPage {}
