import { FieldType } from '../enums/field-type';
import { OptionModel } from './option';
import { ComboModel } from './combo';

/**
 * Model para definição do atributo a ser diponibilizado para filtro
 */
export interface FieldModel {
    /**
     * Nome do atributo
     */
    name: string;

    /**
     * Rótulo apresentado para o usuário
     */
    label: string;

    /**
     * Tipo do campo
     */
    type: FieldType;

    /**
     * Lista de opções disponíveis
     */
    options?: OptionModel[];

    /**
     * Combo lazy-load
     */
    combo?: ComboModel;
}