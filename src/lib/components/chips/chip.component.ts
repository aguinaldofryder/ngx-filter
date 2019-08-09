import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterModel } from '../../models';

@Component({
    selector: 'chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss']
})
export class ChipComponent {

    /**
     * Texto exibito no componente
     */
    @Input() filter: FilterModel;

    @Output() remove: EventEmitter<FilterModel> = new EventEmitter();

    get label(): string {
        return `${this.filter.field.label} ${this.filter.operator.label.toLowerCase()} ${this.filter.value}`
    }

    /**
     * Emite evento para remover o componente
     */
    onRemove() {
        this.remove.emit(this.filter);
    }
}