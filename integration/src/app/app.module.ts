import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {FlexMediaModule} from 'angular-flex-picture';

import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, FlexLayoutModule, FlexMediaModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
