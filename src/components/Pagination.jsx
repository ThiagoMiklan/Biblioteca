// @flow
import React from 'react';
import { validate } from '../tools/type_validations';
import type {PaginationItem} from '../tools/types';

type Props = {
    definition?: string,
    href_previous?: string,
    href_next?: string,
    next_disabled?: bool,
    next_name?: string,
    previous_disabled?: bool,
    itens?: Array<PaginationItem>,
    previous_name?: string
}

const props_obj = {
    definition: "string",
    href_previous: "string",
    href_next: "string",
    next_disabled: "boolean",
    next_name: "string",
    previous_disabled: "boolean",
    itens: "array",
    previous_name: "string"
}

const Pagination = (props: Props) => {
    validate(props, props_obj, "Pagination");
    var definition = (props.definition == undefined) ? "pagination" : "pagination " + props.definition;
    return (
        <nav className={definition}>
            <a className="pagination-previous" href={props.href_previous} disabled={props.previous_disabled}>{props.previous_name}</a>
            <a className="pagination-next" href={props.href_next} disabled={props.next_disabled}>{props.next_name}</a>
            <ul class="pagination-list">
                {assemble(props.itens)}
            </ul>
        </nav>)
}

function assemble(itens) {
    var code_itens = "";
    if (Array.isArray(itens)) {
        code_itens = assembleItens(itens);
    } else if (typeof itens == 'object') {
        code_itens = assembleItem(itens);
    }
    return code_itens;
}

function assembleItens(itens) {
    return itens.map(item => assembleItem(item));
}

function assembleItem(item) {
    var definition =(item["definition"] == undefined) ? "pagination-link":"pagination-link " + item["definition"];
    var item_code = item_code = <li><a onClick={item["onClick"]} disabled={item["disabled"]} href={item["href"]} className={definition}>{item["value"]}</a></li>;
    return item_code;
}

export default Pagination;