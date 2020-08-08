// @flow

import React from 'react';
import { validate } from '../tools/type_validations.js';
import type {ListItem} from '../tools/types';

type Props = {
    itens?: Array<ListItem>,
    definition?: string
}

const props_obj = {
    itens: "array",
    definition: "string"
}

const List = (props:Props)=> {
    validate(props, props_obj,"List");
    return (assembleList(props));    
}

function assembleList(props) {
    var list = props.itens;
    var list_tags = "";
    
    if(list != undefined && Array.isArray(list)){
        list_tags = 
            <ol className={props.definition}>
                {assembleRow(list)}
            </ol>
        
    }
    
    return list_tags;
}

function assembleRow(list){
    return (list.map(item =><li key={item["key"]} onClick={item["onClick"]} {...item["custom"]}>{item["value"]}</li> ));
}


export default List;