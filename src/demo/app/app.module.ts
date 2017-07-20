import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexMediaModule } from 'angular-flex-picture';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FlexMediaModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
