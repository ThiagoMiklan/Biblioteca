import React,{useState} from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

// sem icon ainda
const Input = (props) => {
    
    return (
        assemble(props)
    );
}

function createHook(){

}

function assemble(props) {
    var code = "";

    if (props.loading) {
        code = assembleInputLoading(props);
    } else {
        code = assembleInput(props);

    }
    return code;

}
function assembleInputLoading(props) {
    var definition = 'control is-loading ' + classnames(getClassName(props.definition, "Input"));
    return <div className={definition}>
        {assembleInput(props)}
        {props.icon}
    </div>
}

function assembleInput(props) {
    var input_code = "";
    var definition = 'input ' + classnames(getClassName(props.definition, "Input"));

    if (props.disabled) {
        if (props.readonly) {
            input_code =
                <div className="control">
                    <input onChange={props.onChangeEvent}  className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled readonly></input>
                    {props.icon}
        </div>
        } else {
            input_code =
                <div className="control">
                    <input  onChange={props.onChangeEvent}  className={definition} type={props.type} placeholder={props.placeholder} value={props.value} disabled></input>
                    {props.icon}
        </div>
        }
    } else {
        input_code =
            <div className="control">
                <input onChange={props.onChangeEvent}  className={definition} type={props.type} placeholder={props.placeholder} value={props.value}></input>
                {props.icon}
        </div>
    }
    return input_code;
}

Input.propTypes = {
    definition: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    loading: PropTypes.bool,
    readonly: PropTypes.bool,
    onChangeEvent : PropTypes.func

};


export default Input;