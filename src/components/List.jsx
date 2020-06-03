// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations.js';

type Props = {
    itens?: Array<Object>,
    definition?: string
}

const props_obj = {
    itens: "array",
    definition: "string"
}

const List = (props:Props)=> {
    validate(props, props_obj);
    return (assembleList(props));    
}

 // monta o esqueleto da(s) lista(s) através do map e depois monta cada linha de cada lista
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
    return (list.map(item =><li onClick={item["onClick"]}>{item["value"]}</li> ));
}

List.propTypes ={
    definition: PropTypes.string,
    itens: PropTypes.array.isRequired

}


export default List;