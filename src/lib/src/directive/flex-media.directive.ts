import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BreakPointRegistry } from '@angular/flex-layout';

@Directive({ selector: '[flexMedia]' })
export class FlexMediaDirective implements OnInit, OnChanges {
  @Input('flexMedia') flexBreakPoint: string;

  constructor(
    private el: ElementRef,
    private breakPoints: BreakPointRegistry,
  ) {}

  ngOnInit() {
    this._updateMediaVlue();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['flexBreakPoint']) {
      this._updateMediaVlue(changes['flexBreakPoint'].currentValue);
    }
  }

  _updateMediaVlue(value = this.flexBreakPoint) {
    this.el.nativeElement.setAttribute(
      'media',
      this.breakPoints.findByAlias(value).mediaQuery,
    );
  }
}
