import { NgModule } from  '@angular/core';
import { CommonModule } from  '@angular/common';
import { FormsModule } from '@angular/forms'

import { ListComponent } from './list.component';
import { ButtonAddModule } from '../button-add/button-add.module';

@NgModule({
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ButtonAddModule,
        FormsModule
    ],
})

export  class  ListModule { }