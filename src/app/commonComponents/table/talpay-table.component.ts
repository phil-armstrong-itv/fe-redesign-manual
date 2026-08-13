import { Component, input, output } from '@angular/core';
import { HlmCaption, HlmTable, HlmTableContainer, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr,  } from '@spartan-ng/helm/table';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmField } from '@spartan-ng/helm/field';
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
    HlmInput,
    HlmButton,
    HlmField,
    HlmField,
    FormsModule,
  ],
  templateUrl: './talpay-table.component.html',
  styleUrl: './talpay-table.component.css',
})
export class TalpayTable {
  searchText = '';
  searchEvent = output<string>();

  columns = input.required<string[]>();
  data = input.required<Record<string, any>[]>();

  search() {
  this.searchEvent.emit(this.searchText)
  }
}
