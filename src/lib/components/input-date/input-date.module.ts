import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputDateComponent } from './input-date.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputDateComponent],
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputDateComponent
  ]
})
export class InputDateModule { }
