import { Component, input } from '@angular/core';
import { HlmAccordion, HlmAccordionContent, HlmAccordionItem, HlmAccordionTrigger } from '@spartan-ng/helm/accordion';

@Component({
  selector: 'accordion',
  imports: [HlmAccordion, HlmAccordionItem, HlmAccordionTrigger, HlmAccordionContent],
  styleUrl: './accordion.css',
  templateUrl: './accordion.html',
})
export class Accordion {
  title = input<string>();
}
