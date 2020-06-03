// @flow
import React from 'react'
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations';


type Props = {
    definition?: string,
    onChange?: ()=>void,
    multiple_size?: number,
    itens?: Array<Object>
}

const props_obj = {
    definition: "string",
    onChange: "function",
    multiple_size: "number",
    itens: "array"
}

const Select = (props:Props) => {
    validate(props,props_obj);
    var definition = (props.definition == undefined) ? "select" : "select "+ props.definition;
    var code = <div className={definition}>
        {props.multiple_size == undefined
            ? <select onChange={props.onChange} className={definition}> {assembleItens(props.itens)}</select>
            : <select onChange={props.onChange} className={definition} multiple size={props.multiple_size}> {assembleItens(props.itens)}</select>
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

Select.propTypes = {
    multiple_size: PropTypes.number,
    itens: PropTypes.array,
    onChange: PropTypes.func
}

export default Select;