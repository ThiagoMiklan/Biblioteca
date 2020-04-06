import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button.jsx';
import { renderToString } from 'react-dom/server';
/*
    Menu Item foi desenvolvido para representar uma parte de um menu, 
    representando não somente o menu em si, mas também o label de cada item/itens
*/
class MenuItem extends React.Component {

    render() {
        
        return (
            <div>
                {assembleLabel(this.props.label)}
                <ul className="menu-list">
                {assembleItem(this.props.item)}
                </ul>
            </div>
            );
    }
}

function assembleLabel(label){
    return <p class="menu-label">
    {label}
  </p>;
  
}
/*

*/
function assembleItem(item) {
    var item_code = "";
    // item é um array²
    if (Array.isArray(item)) {
        // [sim] = monta o item baseado em um array
       item_code = assembleItemWithSubList(item);
    } else {
        // [não] = monta um item normal, o item mais simples
       item_code = assembleSingleItem(item);
    }

    return item_code;
}

// caso simples onde apenas um item é desejado, informando apenas um objeto
function assembleSingleItem(item) {
    var item_code = "";
    if(item["sub_itens"]!= undefined){
        item_code = decideTypeOfItem(item);
    }else{
        item_code = <li><a>{item["item"]}</a></li>; 
    }
    return item_code;
}
function assembleSubItens(sub_item){
    return <li><a>{sub_item}</a></li>;
}

// caso mais complexo onde um item possui uma sublista
function assembleItemWithSubList(itens) {
    return (itens.map(item => decideTypeOfItem(item)));
}

// método usado para retornar o código referente a um item de um array de forma simples
// ou um item de um array que contenha uma sublista
function decideTypeOfItem(item) {
    var item_code = "";
    
    // se possuir sub_itens
    if (item["sub_itens"] != undefined) {
        item_code = <li>
            <a> {item["item"]}</a>
            <ul>
                {item["sub_itens"].map(item => assembleSubItens(item))}
            </ul>
        </li>
        var code = renderToString(item_code);
        var x = 0;
    } else {
        item_code = assembleSingleItem(item);
    }

    return item_code;
}


export default MenuItem;