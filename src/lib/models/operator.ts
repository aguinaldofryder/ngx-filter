import { FieldType } from 'ngx-filter';
import { OperatorType } from '../enums/operator-type';

export interface OperatorModel {
    label: string;
    name: OperatorType;
    types: FieldType[];
}