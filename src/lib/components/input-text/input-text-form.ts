import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlDefs } from './control-defs';

export function initFormInpuText() {
    return new FormGroup({
        [ControlDefs.VALUE]: new FormControl(null, [Validators.required])
    })
}