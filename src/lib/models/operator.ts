import { FieldType } from 'ngx-filter';

export interface OperatorModel {
    label: string;
    name: string;
    types: FieldType[];
}