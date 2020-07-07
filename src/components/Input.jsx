// @flow
import React, { useState } from 'react'
import { validate } from '../tools/type_validations.js';
import Control from './Control';

type Props = {
    definition?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    readonly?: bool,
    disabled?: bool,
    onChangeEvent?: () => void
}

const props_obj = {
    definition: "string",
    type: "string",
    placeholder: "string",
    value: "string",
    readonly: "boolean",
    disabled: "boolean",
    onChangeEvent: "function"
}


const Input = (props: Props) => {
    validate(props, props_obj,"Input");
    return (
        assemble(props)
    );
}

function assemble(props) {
    var code = "";

    if (props.definition != undefined) {
        if (props.definition.includes("is-loading")) {
            code = assembleInputLoading(props);
        } else {
            code = assembleInput(props);
        }
    } else {
        code = assembleInput(props);
    }

    return code;

}
function assembleInputLoading(props) {
    var definition_input = (props.definition == undefined) ? "" : props.definition;
    var definition = 'control ' + definition_input;
    return <div className={definition}>
        {assembleInput(props)}

    </div>
}

function assembleInput(props) {
    var input_code = "";
    var definition = (props.definition == undefined) ? 'input' : "input " + props.definition;

    if (props.disabled) {
        if (props.readonly) {
            input_code =
                <Control>
                    <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled readonly></input>
                </Control>
        } else {
            input_code =
                <Control>
                    <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled></input>
                </Control>
        }
    } else {
        input_code =
            <Control>
                <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value}></input>
            </Control>
    }
    return input_code;
}

export default Input;