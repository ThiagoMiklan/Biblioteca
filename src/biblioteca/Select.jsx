// @flow
import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import checkerDefinition from '../tools/checker.js';

type Props = {
    definition?: string,
    onChange?: ()=>void,
    multiple_size?: number,
    itens?: Array<Object>
}

const Select = (props:Props) => {
    checkerDefinition(props.definition,"Select");
    var select_def = (props.definition == undefined)? "": props.definition;
    var definition = classnames(getClassName("select " + select_def, "Select"));
    var definitionSelect= classnames(getClassName(getDefinitionCssEvents(props.definition), "Select"));
   
    var code = <div className={definition}>
        {props.multiple_size == undefined
            ? <select onChange={props.onChange} className={definitionSelect}> {assembleItens(props.itens)}</select>
            : <select onChange={props.onChange} className={definitionSelect} multiple size={props.multiple_size}> {assembleItens(props.itens)}</select>
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