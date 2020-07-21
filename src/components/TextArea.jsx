// @flow
import React from 'react'
import Control from './Control';
import { validate } from '../tools/type_validations';

type Props = {
    definition?: string,
    loading?: bool,
    onChange?: () => void,
    placeholder?: () => void,
    rows?: () => number,
    readonly?: bool,
    disabled?: bool,
    label?: string,
    value?: string,
    custom?: Object
}

const props_obj = {
    definition: "string",
    loading: "boolean",
    onChange: "function",
    placeholder: "string",
    rows: "string",
    readonly: "boolean",
    disabled: "boolean",
    label: "string",
    value: "string",
    custom: "object"
}

const TextArea = (props: Props) => {
    validate(props, props_obj,"TextArea");
    return assembleTextArea(props);
}

function assembleTextArea(props) {
    validate(props, props_obj);
    var definition = (props.definition == undefined) ? "textarea" : "textarea " + props.definition;

    var definitionControl = props.definition != undefined && props.definition.includes("is-loading") ? "is-loading" : "";

    return <Control definition={definitionControl}>
        <label className="label"> {props.label}</label>
        <textarea onChange={props.onChange} className={definition} placeholder={props.placeholder} rows={props.rows} readOnly={props.readonly} disabled={props.disabled}  value={props.value}
        ></textarea>
    </Control>
}


export default TextArea;