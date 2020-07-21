// @flow
import React from 'react';
import { validate } from '../tools/type_validations';
import {MenuItemItem} from '../tools/types';

type Props = {
    itens?: Array<MenuItemItem>,
    label?: string
}

const props_obj = {
    itens: "array",
    label: "string"
}

const MenuItem = (props:Props)=>{
    validate(props,props_obj,"MenuItem");
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
   
    if (Array.isArray(itens)) {
       item_code = assembleItemWithSubList(itens);
    } else {
       item_code = assembleSingleItem(itens);
    }

    return item_code;
}


function assembleSingleItem(item) {
    var item_code = "";
  
    if(item["sub_itens"]!= undefined){
        item_code = decideTypeOfItem(item);
    }else{
     
        var definition =  item["definition"];
        item_code = <li><a className={definition} onClick={item["onClick"]} >{item["value"]}</a></li>; 
    }
    return item_code;
}
function assembleSubItens(item){
 
    var definition= item["definition"];
    return <li><a className={definition} onClick={item["onClick"]}>{item["value"]}</a></li>;
}


function assembleItemWithSubList(itens) {
    return (itens.map(item => decideTypeOfItem(item)));
}

function decideTypeOfItem(item) {
    var item_code = "";
    
    if (item["sub_itens"] != undefined) {
      
        var definition = item["definition"];
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


export default MenuItem;