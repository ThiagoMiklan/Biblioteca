// @flow
import React from 'react'
import { validate } from '../tools/type_validations';

type Props = {
    definition?: string,
    onChange?: ()=>void,
    multiple_size?: number,
    itens?: Array<Object>,
    custom?: Object
}

const props_obj = {
    definition: "string",
    onChange: "function",
    multiple_size: "number",
    itens: "array",
    custon: 'object'
}

const Select = (props:Props) => {
    validate(props,props_obj,"Select");
    var definition = (props.definition == undefined) ? "select" : "select "+ props.definition;
    var code = <div className={definition}>
        {props.multiple_size == undefined
            ? <select onChange={props.onChange} className={definition} {...props.custom}> {assembleItens(props.itens)}</select>
            : <select onChange={props.onChange} className={definition} {...props.custom} multiple size={props.multiple_size}> {assembleItens(props.itens)}</select>
        }
    </div>
    return code;

}

function getDefinitionCssEvents(definition) {
    var focused = "";
    var hovered = "";
    var active = "";
    
    if(definition != undefined){
    focused = (definition.includes("focused") == true ? "focused " : "");
    hovered = (definition.includes("hovered") == true ? "hovered " : "");
    active = (definition.includes("active") == true ? "active " : "");
    }
    
    return focused + hovered + active;
}

function assembleItens(itens) {
    var code = "";

    if (Array.isArray(itens) && itens != undefined) {
        code = itens.map(item => {
            return <option value={item["value"]}>{item["value"]}</option>
        })
    }
    return code;
}


export default Select;