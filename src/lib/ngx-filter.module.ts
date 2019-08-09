import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from './components/chips/chip.module';
import { NgxFilterComponent } from './ngx-filter.component';

@NgModule({
  declarations: [NgxFilterComponent],
  imports: [
    ChipModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NgxFilterComponent]
})
export class NgxFilterModule { }
