import { Component, computed, input, signal } from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';

@Component({
  selector: 'obfuscate-bank-account-number',
  templateUrl: './obfuscate-bank-account-number.html',
  styleUrl: './obfuscate-bank-account-number.css',
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
  imports: [NgIcon],
})
export class ObfuscateBankAccountNumber {
  obfuscated = signal(true);
  partyId = input.required<string>();
  unobfuscatedValue = signal('12345678');
  iconName = computed(() => this.obfuscated() ? 'lucideEye' : 'lucideEyeOff')

  private visibleNumber = computed(() => (this.obfuscated() ? undefined : this.unobfuscatedValue()));

  bankAccountNumber = outputFromObservable(toObservable(this.visibleNumber));

  toggleObfuscated = () => {
    this.obfuscated.update((value) => !value);
  };
}
