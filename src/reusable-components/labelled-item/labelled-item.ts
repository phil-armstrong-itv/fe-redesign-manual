import { Component, input } from '@angular/core';

@Component({
  selector: 'labelled-item',
  templateUrl: './labelled-item.html',
  styleUrl: './labelled-item.css',
})
export class LabelledItem {
  key = input.required<string>();
  value = input<string>();
  blankValue = input<string>('-');
}
