// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import checkerDefinition from '../tools/checker.js';

/*
    Menu Item foi desenvolvido para representar uma parte de um menu, 
    representando não somente o menu em si, mas também o label de cada item/itens

    Funcionamento: Para criar um menu é possível passar como props.itens um objeto ou um array
    Objeto -> Informar quando for necessário somente um item
    Ex: 
     GENERAL -> label
        Manage your team -> item
            Member  -> subitem
            Plugin  -> subitem
            Add a member -> subitem

    Nota-se que nesse caso é informado junto com o item, seus subitens(que são opcionais)

    Array-> Informar quando necessário mais de um item
    Ex:
    ADMINISTRATION -> label
        Dashboard -> item
        Customers -> item

    Existem a possibilidade de mesclar itens com subitens



*/
type Props = {
    itens?: Array<Object>,
    label?: string
}

const MenuItem = (props:Props)=>{
    
    return (
        
            <div>
                {props.itens != undefined && 
                 <>
                 {assembleLabel(props.label)}
                 <ul className="menu-list">
                 {props.itens != undefined && assembleItem(props.itens)}
                 </ul>
                 </>
                }
            </div>
            );
}

function assembleLabel(label){
    return <p class="menu-label">
            {label}
           </p>;
}
/*

*/
function assembleItem(itens) {
    var item_code = "";
    // item é um array²z
    if (Array.isArray(itens)) {
        // [sim] = monta o item baseado em um array
       item_code = assembleItemWithSubList(itens);
    } else {
        // [não] = monta um item normal, o item mais simples
       item_code = assembleSingleItem(itens);
    }

    return item_code;
}

// caso simples onde apenas um item é desejado, informando apenas um objeto
function assembleSingleItem(item) {
    var item_code = "";
  
    if(item["sub_itens"]!= undefined){
        item_code = decideTypeOfItem(item);
    }else{
        checkerDefinition(item["definition"],"Menu");
        var definition =  classnames(getClassName(item["definition"],"Menu"));
        item_code = <li><a className={definition} onClick={item["onClick"]} >{item["value"]}</a></li>; 
    }
    return item_code;
}
function assembleSubItens(item){
    checkerDefinition(item["definition"],"Menu");
    var definition = classnames(getClassName(item["definition"],"Menu"));
    return <li><a className={definition} onClick={item["onClick"]}>{item["value"]}</a></li>;
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
        checkerDefinition(item["definition"],"Menu");
        var definition =  classnames(getClassName(item["definition"],"Menu"));
        item_code = <li>
            <a className={definition} onClick={item["onClick"]}> {item["value"]}</a>
            <ul>
                {item["sub_itens"].map(item => assembleSubItens(item))}
            </ul>
        </li>
    } else {
        item_code = assembleSingleItem(item);
    }

    return item_code;
}

MenuItem.propTypes ={
    label: PropTypes.string,
    itens: PropTypes.array
}

export default MenuItem;