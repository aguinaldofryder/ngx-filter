/**
 * Model para lista de opções 
 */
export interface OptionModel {
    /**
     * Valor do item
     */
    value: number | boolean | string;

    /**
     * Rótulo apresentado para o usuário
     */
    label: string;
}