import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'labelled-date',
  templateUrl: './labelled-date.html',
  styleUrl: './labelled-date.css',
  imports: [DatePipe],
})
export class LabelledDate {
  key = input.required<string>();
  value = input<Date>();
  blankValue = input<string>('-');
}
