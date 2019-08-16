import { FieldModel } from './field';
import { OperatorModel } from './operator';
import { ValueModel } from './value';

export interface FilterModel {
    field: FieldModel;
    operator: OperatorModel;
    value: ValueModel;
}