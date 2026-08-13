import { Component, signal, input, effect } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmDrawerImports } from '@spartan-ng/helm/drawer';
import { lucidePlus, lucideSave, lucideDelete } from '@ng-icons/lucide';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';
import { Debt } from '../../../../types/debt';


@Component({
  selector: 'app-party-debt-form',
  imports: [
    HlmButton,
    NgIcon,
    HlmDrawerImports,
    HlmTextareaImports,
    HlmFieldImports,
    HlmInputImports,
    HlmDatePickerImports,
  ],
  providers: [provideIcons({ lucidePlus, lucideSave, lucideDelete })],
  templateUrl: './party-debt-form.component.html',
  styleUrl: './party-debt-form.component.css',
})
export class PartyDebtForm {
  formType = input.required<'debt' | 'recoupment'>();
}
