import React from 'react'
import {validate} from '../tools/type_validations.js';

type Props = {
    definition?: string,
    disabled?: string,
}

var props_obj = {
    disabled: 'boolean',
    onClick: 'function'
}

const CheckBox = (props)=>{
    validate(props,props_obj,"CheckBox");
    let definition  = (props.definition == undefined)? "checkbox" : "checkbox "+props.definition;
    return <label className={definition} disabled={props.disabled}>
                <input type="checkbox"  onClick={props.onClick} disabled={props.disabled}/>
                {props.children}
            </label>
}

export default CheckBox;