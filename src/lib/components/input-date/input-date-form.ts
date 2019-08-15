import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlDefs } from './control-defs';

export function initFormInpuDate() {
    return new FormGroup({
        [ControlDefs.INITIAL]: new FormControl(null, [Validators.required]),
        [ControlDefs.LAST]: new FormControl(null)
    })
}