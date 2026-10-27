import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[column]' })
export class TalpayCell {
  column = input.required<string>();
  template = inject(TemplateRef);
}
