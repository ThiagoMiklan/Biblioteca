// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    definition?:string,
    href_previous?: string,
    href_next?:string,
    next_disabled?:bool,
    next_name?: string,
    previous_disabled?:bool,
    itens?: Array<Object>,
    previous_name?:string
}

const Pagination = (props:Props) => {
    
    var definition = (props.definition == undefined) ? "pagination" : "pagination "+ props.definition;
    return (
        <nav className={definition}>
            <a className="pagination-previous" href={props.href_previous} disabled={props.previous_disabled}>{props.previous_name}</a>
            <a className="pagination-next" href={props.href_next} disabled={props.next_disabled}>{props.next_name}</a>
            <ul class="pagination-list">
                {assemble(props.itens)}
            </ul>
        </nav>)
}

function assemble(itens){
    var code_itens =  "";
    if(Array.isArray(itens)){
        code_itens = assembleItens(itens);
    }else if(typeof itens == 'object'){
        code_itens = assembleItem(itens);
    }
    return code_itens;
}

function assembleItens(itens){
    return itens.map(item => assembleItem(item));
}

function assembleItem(item) {
    var definition =  "pagination-link "+item["definition"];
    var item_code = item_code = <li><a onClick={item["onClick"]} disabled={item["disabled"]} href={item["href"]}className={definition}>{item["value"]}</a></li>;
    return item_code;
}

Pagination.propTypes = {
    definition: PropTypes.string.isRequired,
    previous_name: PropTypes.string.isRequired,
    next_name: PropTypes.string.isRequired,
    href_previous: PropTypes.string,
    href_next: PropTypes.string,
    previous_disabled: PropTypes.string,
    next_disabled: PropTypes.string
}

export default Pagination;