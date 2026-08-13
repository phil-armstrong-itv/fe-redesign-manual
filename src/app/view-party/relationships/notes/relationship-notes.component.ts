import { Component, input } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmDrawerImports } from '@spartan-ng/helm/drawer';
import { lucidePlus, lucideSave, lucideDelete } from '@ng-icons/lucide';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-relationship-notes',
  imports: [HlmButton, NgIcon, HlmDrawerImports, HlmTextareaImports],
  providers: [provideIcons({ lucidePlus, lucideSave, lucideDelete })],
  templateUrl: './relationship-notes.component.html',
  styleUrl: './relationship-notes.component.css',
})
export class RelationshipNotes {
  notes = input<string>();
}
