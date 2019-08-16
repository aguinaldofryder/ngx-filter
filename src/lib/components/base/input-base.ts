import { Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export abstract class InputBase {

    @Input('form-control') formControl: FormControl;

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
            this.onPush();
        }
    }
}