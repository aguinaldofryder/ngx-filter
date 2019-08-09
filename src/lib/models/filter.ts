import { FieldModel } from './field';
import { OperatorModel } from './operator';

export interface FilterModel {
    field: FieldModel;
    operator: OperatorModel;
    value: any;
}