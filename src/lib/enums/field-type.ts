/**
 * Enum para definição do tipo do atributo disponível para filtro
 */
export enum FieldType {
    /**
     * Texto
     */
    STRING,
    /**
     * Números
     */
    NUMBER,
    /**
     * Data
     */
    DATE,
    /**
     * Lista de opções
     */
    ENUM,
    /**
     * Lista de opções lazy-load
     */
    COMBO
}