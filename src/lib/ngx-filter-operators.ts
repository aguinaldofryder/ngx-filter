import { OperatorModel } from './models';
import { FieldType } from './enums';
import { OperatorType } from './enums/operator-type';

export const allOperators: OperatorModel[] = [
    {
        label: 'Contém',
        name: OperatorType.LIKE,
        types: [FieldType.STRING]
    },
    {
      label: 'É igual a',
      name: OperatorType.EQUAL,
      types: [FieldType.COMBO, FieldType.DATE, FieldType.ENUM, FieldType.NUMBER, FieldType.STRING]
    },
    {
      label: 'Está entre',
      name: OperatorType.BETWEEN,
      types: [FieldType.DATE, FieldType.ENUM, FieldType.NUMBER]
    },
    {
      label: 'É menor que',
      name: OperatorType.LESS_THAN,
      types: [FieldType.DATE, FieldType.NUMBER]
    },
    {
      label: 'É menor ou igual a',
      name: OperatorType.LESS_THAN_OR_EQUAL,
      types: [FieldType.DATE, FieldType.NUMBER]
    },
    {
      label: 'É maior que',
      name: OperatorType.GREATER_THAN,
      types: [FieldType.DATE, FieldType.NUMBER]
    },
    {
      label: 'É maior ou igual a',
      name: OperatorType.GREATER_THAN_OR_EQUAL,
      types: [FieldType.DATE, FieldType.NUMBER]
    }
  ]