import { FormGroup, FormControl } from '@angular/forms';

export class NgxFilterUtil {

    /**
     * Verifica se o formulário é válido
     * @param form 
     */
    protected isValid(form: FormGroup) {
        return form.valid;
    }

    /**
     * Marca todos os campos como tocados
     */
    private markAsTouched(form: FormGroup) {
        Object.keys(form.controls).forEach(controlName => {
            const control = form.get(controlName);
            if(control instanceof FormGroup) {
                this.markAsTouched(control);
            }
            control.markAsTouched();
        })
    }
}