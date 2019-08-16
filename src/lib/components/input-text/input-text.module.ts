import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class InputTextModule { }
