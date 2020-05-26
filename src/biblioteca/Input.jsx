// @flow
import React, { useState } from 'react'
import PropTypes from 'prop-types';

type Props = {
    definition?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    readonly?: bool,
    disabled?: bool,
    onChangeEvent?: () => void
}

const Input = (props: Props) => {
    return (
        assemble(props)
    );
}

function assemble(props) {
    var code = "";

    if (props.definition != undefined) {
        if (props.definition.includes("is-loading")) {
            code = assembleInputLoading(props);
        }else{
            code = assembleInput(props);
        }
    } else {
        code = assembleInput(props);
    }

    return code;

}
function assembleInputLoading(props) {
    var definition_input = (props.definition == undefined) ? "" : props.definition;
    var definition = 'control '+ definition_input;
    return <div className={definition}>
        {assembleInput(props)}

    </div>
}

function assembleInput(props) {
    var input_code = "";
    var definition = (props.definition == undefined )?'input': "input " + props.definition;

    if (props.disabled) {
        if (props.readonly) {
            input_code =
                <div className="control">
                    <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled readonly></input>

                </div>
        } else {
            input_code =
                <div className="control">
                    <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled></input>

                </div>
        }
    } else {
        input_code =
            <div className="control">
                <input onChange={props.onChangeEvent} className={definition} type={props.type} placeholder={props.placeholder} value={props.value}></input>

            </div>
    }
    return input_code;
}

Input.propTypes = {
    definition: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    readonly: PropTypes.bool,
    onChangeEvent: PropTypes.func
};


export default Input;