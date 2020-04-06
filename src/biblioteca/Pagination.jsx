import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName'


const Pagination = (props) => {
    var definition = "pagination " + classnames(getClassName(props.definition, "Pagination"));
    return (
        <nav className={definition}>
            <a className="pagination-previous" href={props.href_previous}>{props.previous_name}</a>
            <a className="pagination-next" href={props.href_next}>{props.next_name}</a>
            <ul class="pagination-list">
                {assemble(props.itens,props.disabled)}
            </ul>
        </nav>)
}

function assemble(itens,disabled){
    var code_itens =  "";
    if(Array.isArray(itens)){
        code_itens = assembleItens(itens,disabled);
    }else if(typeof itens == 'object'){
        code_itens = assembleItem(itens,disabled);
    }
    return code_itens;
}

function assembleItens(itens,disabled){
    return itens.map(item => assembleItem(item,disabled));
}

function assembleItem(item,disabled) {
    var definition =  "pagination-link "+ classnames(getClassName(item["definition"],"Pagination"));
    var item_code = "";
    if(disabled === true){
        item_code = <li><a disabled href={item["href"]}className={definition}>{item["value"]}</a></li>;
    }else{
        item_code = <li><a href={item["href"]}className={definition}>{item["value"]}</a></li>;
    }
    
    return item_code;
}

Pagination.propTypes = {
    definition: PropTypes.string.isRequired,
    previous_name: PropTypes.string.isRequired,
    next_name: PropTypes.string.isRequired
}

export default Pagination;