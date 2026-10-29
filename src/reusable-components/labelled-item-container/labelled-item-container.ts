import { Component, input } from '@angular/core';
import { LabelledData } from '../labelled-item/types';
import { LabelledItem } from '../labelled-item/labelled-item';

@Component({
  selector: 'labelled-item-container',
  templateUrl: './labelled-item-container.html',
  styleUrl: './labelled-item-container.css',
  imports: [LabelledItem],
})
export class LabelledItemContainer {
  items = input.required<LabelledData[]>();
}
