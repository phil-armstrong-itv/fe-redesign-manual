import { Component, input } from '@angular/core';
import { HlmCaption, HlmTable, HlmTableContainer, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr,  } from '@spartan-ng/helm/table';
import { FormsModule } from '@angular/forms';
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
  ],
  templateUrl: './talpay-table.component.html',
  styleUrl: './talpay-table.component.css',
})
export class TalpayTable {
  columns = input.required<string[]>();
  data = input.required<Record<string, any>[]>();
}
