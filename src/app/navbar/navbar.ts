import { Component, signal } from '@angular/core';

import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideList, lucideSearch, lucidePlus, lucideMenu } from '@ng-icons/lucide';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [HlmNavigationMenuImports, NgIcon, RouterLink],
  providers: [provideIcons({ lucideSearch, lucidePlus, lucideList, lucideMenu })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly _value = signal('home');
}
