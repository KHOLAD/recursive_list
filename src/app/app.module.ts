import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListModule } from './ui/list/list.module';
import { ButtonAddModule } from './ui/button-add/button-add.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ListModule,
    ButtonAddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
