import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { initFormInpuDate } from './input-date-form';
import { FieldType } from '../../enums';
import { OperatorType } from '../../enums/operator-type';
import { ControlDefs } from './control-defs';
import { FilterModel } from '../../models';
import { formatDate } from '@angular/common';
import { ValueModel } from '../../models/value';
import { InputBase } from '../base/input-base';

@Component({
  selector: 'ngx-input-date',
  templateUrl: 'input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputDateComponent extends InputBase implements OnInit {

  @Input('operator-type') operatorType: OperatorType;

  controlDefs = ControlDefs;

  constructor() {
    super();
  }
  
  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.validateForm();
    })
  }
  
  initForm() {
    this.form = initFormInpuDate();
  }
  /**
   * Verifica se a condição é "Entre"
   */
  get isBetween(): boolean {
    const result = this.operatorType === OperatorType.BETWEEN;
    return result;
  }

  get arrayDate(): Date[] {
    return [this.form.get(this.controlDefs.INITIAL).value,
      this.form.get(this.controlDefs.LAST).value];
  }

  get minDateLast(): Date {
    return this.form.get(ControlDefs.INITIAL).value;
  }

  get maxDateInitial(): Date {
    return this.form.get(ControlDefs.LAST).value;
  }

  onPush() {
    if (this.form.valid) {
      this.formControl.setValue(this.formatFilterDate(this.arrayDate));
      this.push.emit();
    } else {
      this.form.get(this.controlDefs.INITIAL).markAsTouched();
      this.form.get(this.controlDefs.LAST).markAsTouched();
      this.validateForm();
    }
  }

  validateForm() {
    Object.keys(this.form.controls).forEach((controlName) => {
      const input = document.getElementById(controlName);
      if (input) {
        const control = this.form.get(controlName);
        if (!control.valid && control.touched) {
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      }
    })
  }

  /**
   * Formata o filtro do tipo data
   * @param filter 
   */
  private formatFilterDate(value: Date[]) {
    if (this.operatorType === OperatorType.BETWEEN) {
      return {
        formattedValue: value.map(item => this.formatDate(item)).join(' e '),
        value: value
      }
    } else {
      return {
        formattedValue: this.formatDate(value[0]),
        value: value[0]
      }
    }
  }


  private formatDate(date: string | number | Date): string {
    return formatDate(date, 'dd/MM/yyy', 'pt');
  }
}
