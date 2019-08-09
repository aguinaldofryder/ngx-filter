/**
 * Model para definição de propriedades do combo
 */
export interface ComboModel {
    /**
     * Propriedade para mostrar ao usuário
     */
    selectedDisplay: string;
    /**
     * Propriedade para enviar ao servidor
     */
    selectedValue: any;
    /**
     * Propriedade para filtro
     */
    searchProperty: string;
    /**
     * Propriedade para ordenação
     */
    oerderProperty: string;
    /**
     * Função para carregar os itend do combo
     */
    onLoad: Function;
}