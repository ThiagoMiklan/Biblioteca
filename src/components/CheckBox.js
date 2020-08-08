// @flow
import * as React from 'react'
import {validate} from '../tools/type_validations.js';

// custom

type Props = {
    definition?: string,
    disabled?: string,
    custom?: Object,
    onClick?: ()=> void,
    children?: React.Node
}

var props_obj = {
    disabled: 'boolean',
    onClick: 'function',
    custom: 'object'
}

const CheckBox = (props: Props)=>{
    validate(props,props_obj,"CheckBox");
    let definition  = (props.definition == undefined)? "checkbox" : "checkbox "+props.definition;
    return <label className={definition} disabled={props.disabled}>
                <input type="checkbox"  onClick={props.onClick} disabled={props.disabled} {...props.custom}/>
                {props.children}
            </label>
}

export default CheckBox;