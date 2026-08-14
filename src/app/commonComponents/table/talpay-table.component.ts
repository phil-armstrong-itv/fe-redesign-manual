import { Component, computed, input, output } from '@angular/core';
import { HlmCaption, HlmTable, HlmTableContainer, HlmTBody, HlmTd, HlmTh, HlmTHead, HlmTr,  } from '@spartan-ng/helm/table';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmField } from '@spartan-ng/helm/field';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../../types/filter';
import { HlmComboboxList, HlmCombobox, HlmComboboxImports } from '../../../../libs/ui/combobox/src';
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
    HlmCombobox,
    HlmComboboxImports,
    HlmComboboxList,
  ],
  templateUrl: './talpay-table.component.html',
  styleUrl: './talpay-table.component.css',
})
export class TalpayTable {
  searchText = '';
  searchEvent = output<string>();

  columns = input.required<string[]>();
  data = input.required<Record<string, any>[]>();
  searchFiltersInput = input<Filter[]>();


  searchFilters = computed(() => this.searchFiltersInput() ?? []);
  search() {
    this.searchEvent.emit(this.searchText);
  }

}
