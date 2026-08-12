import { Component, signal } from '@angular/core';

@Component({
  selector: 'demographic-details',
  templateUrl: './demographic-details.html',
  styleUrl: './demographic-details.css',
})
export class DemographicDetails {
  protected readonly _value = signal('home');
  protected readonly _mobileMenuOpen = signal(false);
}
