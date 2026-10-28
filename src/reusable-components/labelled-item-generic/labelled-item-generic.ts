import { Component, computed, input, Signal } from '@angular/core';
import { LabelledData } from './types';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'labelled-item',
  templateUrl: './labelled-item-generic.html',
  styleUrl: './labelled-item-generic.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [DatePipe, NgIcon, CurrencyPipe],
})
export class LabelledItemGeneric {
  item = input.required<LabelledData>();
  type: Signal<LabelTypes> = computed(() => {
    const value = this.item().value;

    switch (value) {
      case value instanceof Date:
        return 'date';
      case isCurrency(value):
        return 'currency';
      default:
        return typeof value;
    }
  });
}

function isCurrency(value: unknown): value is Currency {
  return typeof value === 'object'
    && value !== null
    && 'code' in value;
}

interface Currency {
  amount: number;
  code: string;
}

type LabelTypes =
  | 'custom'
  | 'currency'
  | 'date'
  | 'undefined'
  | 'object'
  | 'boolean'
  | 'number'
  | 'string'
  | 'function'
  | 'symbol'
  | 'bigint';
