import { Component, computed, input } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';


@Component({
  selector: 'hideInfo',
  imports: [HlmButton],
  styleUrl: './hide-info.css',
  templateUrl: './hide-info.html',
})
export class HideInfo {
  title = input<string>();
  info = input<string>();
  amountToHide = 7;
  hidenInfo = computed(() => this.obfuscateInfo());
  showHidenInfo: boolean = false;

  toggleShowHiddenInfo () {
    this.showHidenInfo = !this.showHidenInfo
  }
  obfuscateInfo(): string {
    let obfuscatedInfo = this.info();
    if(obfuscatedInfo) {
      return obfuscatedInfo.slice(0, obfuscatedInfo.length - this.amountToHide) + '*'.repeat(this.amountToHide);

    } else {
      return ''
    }
  }
}


