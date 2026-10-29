import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[key]' })
export class CustomLabelledItem {
  key = input.required<string>();
  template = inject(TemplateRef);
}
