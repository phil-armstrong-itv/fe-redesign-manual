import { Component, signal } from '@angular/core';

import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideList, lucideSearch, lucidePlus } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  imports: [HlmNavigationMenuImports, NgIcon],
  providers: [provideIcons({ lucideSearch, lucidePlus, lucideList })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly _value = signal('home');
}
