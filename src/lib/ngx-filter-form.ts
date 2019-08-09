import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlDefs } from './ngx-filter-control-defs';

/**
 * Definição do formulário de validação do componente
 */
export default new FormGroup({
    [ControlDefs.FIELD]: new FormControl(null, [Validators.required]),
    [ControlDefs.OPERATOR]: new FormControl(null, [Validators.required]),
    [ControlDefs.VALUE]: new FormControl(null, [Validators.required])
});