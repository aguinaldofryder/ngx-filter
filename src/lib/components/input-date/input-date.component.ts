import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { initFormInpuDate } from './input-date-form';
import { FieldType } from '../../enums';
import { OperatorType } from '../../enums/operator-type';
import { ControlDefs } from './control-defs';

@Component({
  selector: 'ngx-input-date',
  templateUrl: 'input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputDateComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  @Input('operator-type') operatorType: OperatorType;

  @Output() change: EventEmitter<any> = new EventEmitter();

  @Output() push: EventEmitter<any> = new EventEmitter();

  controlDefs = ControlDefs;

  form: FormGroup;

  constructor() {
    this.form = initFormInpuDate();
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.validateForm();
      this.change.emit(this.form.valid ? [this.form.get(this.controlDefs.INITIAL).value,
      this.form.get(this.controlDefs.LAST).value] : null);
    })
  }

  /**
   * Verifica se a condição é "Entre"
   */
  get isBetween(): boolean {
    const result = this.operatorType === OperatorType.BETWEEN;
    return result;
  }

  get minDateLast(): Date {
    return this.form.get(ControlDefs.INITIAL).value;
  }

  get maxDateInitial(): Date {
    return this.form.get(ControlDefs.LAST).value;
  }

  onPush() {
    if (this.form.valid) {
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
}
