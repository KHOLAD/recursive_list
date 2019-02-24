import { NgModule } from  '@angular/core';
import { CommonModule } from  '@angular/common';
import { ButtonAddComponent } from './button-add.component';

@NgModule({
    declarations: [
        ButtonAddComponent
    ],
    exports: [
        ButtonAddComponent
    ],
    imports: [
        CommonModule
    ]
})

export  class  ButtonAddModule { }