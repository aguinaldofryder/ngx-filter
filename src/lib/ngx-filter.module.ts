import { CommonModule, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipModule } from './components/chips/chip.module';
import { InputDateModule } from './components/input-date/input-date.module';
import { InputTextModule } from './components/input-text/input-text.module';
import { NgxFilterComponent } from './ngx-filter.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [NgxFilterComponent],
  imports: [
    BrowserAnimationsModule,
    ChipModule,
    CommonModule,
    InputDateModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports: [NgxFilterComponent]
})
export class NgxFilterModule { }
