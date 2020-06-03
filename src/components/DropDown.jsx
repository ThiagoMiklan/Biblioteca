// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import { validate } from '../tools/type_validations.js';

type Props = {
    definition?: string,
    itens?: React.Node,
    onClick?: () => void
}
const props_obj = {
    definition: 'string',
    itens: 'array',
    onClick: 'function'
}
const DropDown = (props: Props) => {
    validate(props, props_obj);
    var definition = (props.definition == undefined) ? "dropdown" : "dropdown " + props.definition;
    return (<div className={definition}>
        <div class="dropdown-trigger">
            {extractButton(props.itens, props.onClick)}
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {assemble(props.itens)}
            </div>
        </div>
    </div>
    );
}

// Monta um botão a partir do primeiro item da lista
function extractButton(itens, onClick) {
    var name = "";
    var icon_name = ""
    var icon_definition = "";

    // extrai o primeiro item da lista que foi informada como props
    if (itens != undefined && Array.isArray(itens)) {
        if (itens[0] != undefined) {
            var item = itens[0];
            name = item["value"];
            icon_name = item["icon_name"];
        }
    }
    /**
     * Funcionamento da renderização condicional
     * Se o nome do icone não é indefinido ou vazio, é usado o icone default para o dropdown
     * Senão, signigica que foi informado um nome para o icone, então é usado o que foi passado
     */
    return <Button onClick={onClick} >
        {(icon_name != undefined && icon_name != '')
            ? <Icon icon_name={icon_name} icon_right={true}>{name}</Icon>

            : <Icon icon_name={"fas fa-angle-down"} definition={icon_definition} icon_right={true} >{name}</Icon>
        }
    </Button>
}

function assemble(itens) {
    var code = <></>
    if (itens != undefined && Array.isArray(itens)) {
        code = itens.map(item => decideTypeOfItens(item));
    }

    return code;
}

function decideTypeOfItens(item) {
    var item_code = "";
    if (item["link"] == true) {
        item_code = assembleItensLinks(item)
    } else {
        item_code = assembleComponentsItens(item)
    }

    return item_code;
}

function assembleItensLinks(item) {
    var definition = (item["definition"] == undefined) ? "dropdown-item" : "dropdown-item " + item["definition"];
    return <a className={definition} onClick={item["onClick"]} href={item["href"]}>{item["value"]}</a>;
}

function assembleComponentsItens(item) {
    var definition = (item["definition"] == undefined) ? "dropdown-item" : "dropdown-item " + item["definition"];
    return <div className={definition} onClick={item["onClick"]} href={item["href"]} >{item["value"]}</div>;
}

DropDown.propTypes = {
    definition: PropTypes.string,
    itens: PropTypes.array,
    onClick: PropTypes.func
}

export default DropDown;