import { Component, computed, contentChildren, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { HlmCaption, HlmTable, HlmTableContainer, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr,  } from '@spartan-ng/helm/table';
import { FormsModule } from '@angular/forms';
import { TalpayCell } from './talpay-cell.directive';
import { Column } from './types';

@Component({
  selector: 'talpay-table',
  imports: [
    HlmCaption,
    HlmTableContainer,
    HlmTable,
    HlmCaption,
    HlmTHead,
    HlmTr,
    HlmTh,
    HlmTBody,
    HlmTd,
    FormsModule,
    NgTemplateOutlet,
  ],
  templateUrl: './talpay-table.component.html',
  styleUrl: './talpay-table.component.css',
})
export class TalpayTable {
  columns = input.required<Column[]>();
  data = input.required<Record<string, any>[]>();

  private readonly cells = contentChildren(TalpayCell);

  readonly cellTemplates = computed(() => {
    const templates: Record<string, TemplateRef<unknown>> = {};
    for (const cell of this.cells()) {
      templates[cell.column()] = cell.template;
    }
    return templates;
  });

  readonly caption = input<string>('');
}
