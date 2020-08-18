// @flow
import * as React from 'react';
import Button from './Button';
import Icon from './Icon';
import { validate } from '../tools/type_validations.js';
import type {DropDownItem} from '../tools/types';

type Props = {
    definition?: string,
    itens?: Array<DropDownItem>,
    onClick?: () => void,
}
const props_obj = {
    definition: 'string',
    itens: 'array',
    onClick: 'function'
}
const DropDown = (props: Props) => {
    validate(props, props_obj,"DropDown");
    let definition = (props.definition == undefined) ? "dropdown" : "dropdown " + props.definition;
    return (<div className={definition}>
        <div class="dropdown-trigger">
            {extractButton(props.itens, props.onClick)}
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                {assemble(props.itens)}
            </div>
        </div>
    </div>
    );
}

function extractButton(itens, onClick) {
    var name = "";
    var icon_name = ""
    var icon_definition = "";

    if (itens != undefined && Array.isArray(itens)) {
        if (itens[0] != undefined) {
            var item = itens[0];
            name = item["value"];
            icon_name = item["icon_name"];
        }
    }
    
    let label = "";

    if(icon_name != undefined && icon_name != ''){
        label = <Icon icon_name={icon_name} right={true}>{name}</Icon>;
    }else{
        label =  <Icon icon_name={"fas fa-angle-down"} definition={icon_definition} right={true} >{name}</Icon>;
    }

    return <Button onClick={onClick} label={label}/>
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
    return <a className={definition} onClick={item["onClick"]} href={item["href"]} {...item["custom"]} >{item["value"]}</a>;
}

function assembleComponentsItens(item) {
    var definition = (item["definition"] == undefined) ? "dropdown-item" : "dropdown-item " + item["definition"];
    return <div className={definition} onClick={item["onClick"]} href={item["href"]} {...item["custom"]} >{item["value"]}</div>;
}


export default DropDown;