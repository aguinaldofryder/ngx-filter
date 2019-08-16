import { Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldModel } from '../../models';

export abstract class InputBase {

    @Input('form-control') formControl: FormControl;

    @Input() field: FieldModel;

    @Output() push: EventEmitter<any> = new EventEmitter();

    form: FormGroup;

    constructor() {
        this.initForm();
    }

    abstract onPush();

    abstract initForm();

    reset() {
        this.form.reset();
    }

    /**
     * Ouve evento do Enter no campo valor
     */
    onKeyUpValue(event) {
        if (event.key === 'Enter') {
            debugger
            this.onPush();
        }
    }
}