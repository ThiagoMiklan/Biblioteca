// @flow
import React from 'react';
import {validate} from '../tools/type_validations';

type Props = {
  definition?: string,
  itens?: string,
}

const props_obj = {
    definition: "string",
    itens: "array"
}

const BreadCrumb = (props: Props) => {
    validate(props,props_obj,"BreadCrumb");
    let definition = (props.definition ==  undefined) ? "breadcrumb": "breadcrumb "+ props.definition;
    validate(props,props_obj);
    return (
        <nav className={definition}>
            <ul>
                {assemble(props.itens)}
            </ul>
        </nav>);
}


function assemble(item) {
    var itens_code = "";
    if (Array.isArray(item)) {
        itens_code = assembleItens(item);
    } else if (typeof item == 'object') {
        itens_code = assembleSingleItem(item);
    }
    return itens_code;
}

function assembleItens(itens) {
    var itens_code = itens.map(item => assembleSingleItem(item));
    return itens_code;
}

function assembleSingleItem(item) {
  var definition =  item["definition"];
    return (
        <li key={item["key"]} className={definition}>
            <a  onClick={item["onClick"]} href={item["href"]}>{item["value"]}</a>
        </li>);
}

export default BreadCrumb;