import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonAddComponent } from './ui/button-add/button-add.component';
import { ListComponent } from './ui/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonAddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
