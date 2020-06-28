import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppV2Component } from './appv2.component';

@NgModule({
  declarations: [
    AppV2Component
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppV2Component]
})

export class DbModule { }
