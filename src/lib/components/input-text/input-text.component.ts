import { Component, Input, OnInit } from '@angular/core';
import { InputBase } from '../base/input-base';
import { ValueModel } from '../../models/value';
import { initFormInpuText } from './input-date-form';
import { ControlDefs } from './control-defs';

@Component({
  selector: 'ngx-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends InputBase implements OnInit {

  controlDefs = ControlDefs;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  get value(): string {
    return this.form.get(this.controlDefs.VALUE).value;
  }

  initForm() {
    this.form = initFormInpuText();
  }

  async onPush() {
    let data: ValueModel = { value: this.value, formattedValue: this.value }
    await this.formControl.setValue(data);
    this.push.emit();
    this.reset();
  }
}
