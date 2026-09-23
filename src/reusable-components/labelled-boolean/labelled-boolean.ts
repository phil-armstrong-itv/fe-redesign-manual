import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'labelled-boolean',
  templateUrl: './labelled-boolean.html',
  styleUrl: './labelled-boolean.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [NgIcon],
})
export class LabelledBoolean {
  key = input.required<string>();
  value = input.required<boolean>();
}
