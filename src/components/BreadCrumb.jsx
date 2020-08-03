// @flow
import React from 'react';
import {validate} from '../tools/type_validations';
import type {BreadCrumbItem} from '../tools/types';


// validate
// props


type Props = {
  definition?: string,
  itens?: Array<BreadCrumbItem>,
}

const props_obj = {
    definition: "string",
    itens: "array"
}

const props_obj_item = {
    key: "object",
    definition:"string",
    href: "string",
    value:"object",
    onClick: "function",
    custom: "object"
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


function assemble(itens) {
    validate(props_obj_item,itens,"BreadCrumbItem");
    let itens_code = "";
    itens_code = assembleItens(itens);
    return itens_code;
}

function assembleItens(itens) {
    var itens_code = (itens == undefined) ? <></> : itens.map(item => assembleSingleItem(item));
    return itens_code;
}

function assembleSingleItem(item) {
  var definition =  item["definition"];
  var custom = item["custom"];
    return (
        <li key={item["key"]} className={definition} {...custom}>
            <a  onClick={item["onClick"]} href={item["href"]} >{item["value"]}</a>
        </li>);
}

export default BreadCrumb;