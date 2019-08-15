export enum OperatorType {
    LIKE = '$text',
    EQUAL = '$eq',
    IN = '$in',
    GREATER_THAN = '$gt',
    GREATER_THAN_OR_EQUAL = '$gte',
    LESS_THAN = '$lt',
    LESS_THAN_OR_EQUAL = '$lte',
    BETWEEN = '$bt'
}