import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipModule } from './components/chips/chip.module';
import { InputDateModule } from './components/input-date/input-date.module';
import { NgxFilterComponent } from './ngx-filter.component';

@NgModule({
  declarations: [NgxFilterComponent],
  imports: [
    BrowserAnimationsModule,
    ChipModule,
    CommonModule,
    InputDateModule,
    ReactiveFormsModule
  ],
  exports: [NgxFilterComponent]
})
export class NgxFilterModule { }
