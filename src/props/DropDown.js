const drop_down_props= {
    "active": "is-active",
    "hoverable": "is-hoverable",
    "right": "is-right",
    "divider": "is-divider",
    "dropdown-item" : "dropdown-item",
    "up": "is-up",
    /**
     * default-icon é uma propriedade especial
     * Motivação: o componente DropDown suporta ícones dentro de seu
     * nome. Caso não seja informado um ícone através das propriedas de cada item
     * é utilizado o default-icon como icone.
     * Outro motivo é da manutenção, caso seja necessário trocar o default,basta setar
     * a propriedade
     */
    "default-icon" : "fas fa-angle-down"
}

export default drop_down_props;