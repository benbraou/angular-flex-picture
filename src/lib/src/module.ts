import {NgModule} from '@angular/core';
import {BreakPointRegistry, DEFAULT_BREAKPOINTS, FlexLayoutModule} from '@angular/flex-layout';

import {FlexMediaDirective} from './directive/flex-media.directive';

@NgModule({
  imports: [
    FlexLayoutModule,
  ],
  declarations: [FlexMediaDirective],
  providers: [BreakPointRegistry],
  exports: [FlexMediaDirective]
})
export class FlexMediaModule {
}
