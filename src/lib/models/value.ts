/**
 * Classe para tratamento do valor do filtro
 * Valor puro e valor formatado para exibição ao usuário
 */
export interface ValueModel {
    /**
     * Valor para filtro
     */
    value: string | number | Date | Date[];
    /**
     * Valor formatado
     */
    formattedValue: string;
}