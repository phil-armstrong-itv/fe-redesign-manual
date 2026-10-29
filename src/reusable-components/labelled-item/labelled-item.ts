import { Component, computed, contentChildren, input, Signal, type TemplateRef } from '@angular/core';
import { LabelledData } from './types';
import { CurrencyPipe, DatePipe, NgTemplateOutlet } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideX } from '@ng-icons/lucide';
import { CustomLabelledItem } from './custom-labelled-item';

@Component({
  selector: 'labelled-item',
  templateUrl: './labelled-item.html',
  styleUrl: './labelled-item.css',
  providers: [provideIcons({ lucideCheck, lucideX })],
  imports: [DatePipe, NgIcon, CurrencyPipe, NgTemplateOutlet],
})
export class LabelledItem {
  private readonly customValues = contentChildren(CustomLabelledItem);

  item = input.required<LabelledData>();

  customTemplates = computed(() => {
    const templates: Record<string, TemplateRef<unknown>> = {};
    for (const customValue of this.customValues()) {
      templates[customValue.key()] = customValue.template;
    }
    return templates;
  });

  type: Signal<LabelTypes> = computed(() => {
    const value = this.item().value;

    if (value instanceof Date) {
      return 'date';
    }

    if (isCurrency(value)) {
      return 'currency';
    }

    return typeof value;
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
