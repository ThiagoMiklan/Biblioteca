// @flow
import React from 'react';
import { validate } from '../tools/type_validations';
import {NavigationBarItem} from '../tools/types';

type Props = {
    definition?: string,
    link?: string,
    src?: string,
    width_brand?: number,
    alt?: string,
    height_brand?: number,
    itens_start?: Array<NavigationBarItem>,
    itens_end?: Array<NavigationBarItem>
}

const props_obj = {
    definition: "string",
    link: "string",
    src: "string",
    width_brand: "number",
    alt: "string",
    height_brand: "number",
    itens_start: "array",
    itens_end: "array"
}


const NavigationBar = (props: Props) => {
    validate(props, props_obj,"NavigationBar");
    var definition = (props.definition == undefined) ? "navbar" : "navbar " + props.definition;
    return (
        <nav className={definition}>

            <div className="navbar-brand">
                <a className="navbar-item" href={props.link}>
                    <img src={props.src} alt={props.alt} width={props.width_brand} height={props.height_brand}></img>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {assemble(props.itens_start)}
                </div>
                <div className="navbar-end">
                    {assemble(props.itens_end)}
                </div>
            </div>
        </nav>

    );

}

function assemble(itens) {
    var itens_code = "";
    // verifica se array
    if (Array.isArray(itens)) {
        // elimina vazio
        if (itens.length > 0) {
            // se não estiver vazio monta uma lista de itens
            itens_code = assembleItens(itens);
        }
    } else if (typeof itens == 'object' && itens != undefined) {
        //se não for array, não for undefined e for objeto realiza operação
        itens_code = assembleItem(itens);
    }
    return itens_code;
}

function assembleItens(itens) {
    let size = itens.length;
    var itens_code = itens.map(item => decideTypeOfItem(item));
    return itens_code;
}


function decideTypeOfItem(item) {
    var itens_code = "";
    // se um item for um array (array dentro do array), então ele é um dropdown
    if (Array.isArray(item)) {
        itens_code = assembleItensDropDown(item);
    } else {
        // se não ele conjunto de itens encadeados
        itens_code = assembleItem(item);
    }
    return itens_code;
}

// default : hoverable
function assembleItensDropDown(itens) {
    var firstitemDropDown = assembleFirstItemDropDown(itens[0]);

    if (itens.length > 0) {
        itens.splice(0, 1);
    }
    var itens_code =
        <div className="navbar-item has-dropdown is-hoverable">
            {firstitemDropDown}
            <div className="navbar-dropdown">
                {itens.map(item => assembleItem(item))}
            </div>
        </div>;



    return itens_code;
}

function assembleFirstItemDropDown(item) {
    var first_item = "";
    if (item != undefined) {
        first_item = <a className="navbar-link" onClick={item["onClick"]} {...item["custom"]}>
            {item["value"]}
        </a>
    }


    return first_item;
}

function assembleItem(item) {
    var definition = ( item["definition"] == undefined) ? "navbar-item ": "navbar-item "+ item["definition"];
    var item_code = <a onClick={item["onClick"]} className={definition} {...item["custom"]}>{item["value"]}</a>;
    return item_code;
}

export default NavigationBar;

