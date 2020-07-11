import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputInteractionComponent } from './input-interaction/input-interaction.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ToggleCustomBindingComponent } from './toggle-custom-binding/toggle-custom-binding.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InputInteractionComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleCustomBindingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
