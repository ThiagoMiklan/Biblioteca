// @flow
import React from 'react';
import Icon from './Icon';
import Control from './Control';
import Input from './Input';
import { validate } from '../tools/type_validations.js';

type Props = {
    label?: string,
    control_definition?: string,
    input_definition?: string,
    icon_definition?: any,
    icon_name?: string,
    onChange?: () => void,
    placeholder?: string,
    type?: string,
    value?: string,
    custom?: Object,
    help_definition?: string,
    help_value?: string
}

const props_obj ={
    label: "string",
    control_definition: "string",
    input_definition: "string",
    icon_definition: "string",
    icon_name: "string",
    onChange: "function",
    placeholder: "string",
    type: "string",
    value: "string"
}


const Field = (props: Props) => {
    validate(props,props_obj, "Field");
    let help_definition = (props.help_definition == undefined) ? "help": "help "+props.help_definition;
    return <div className="field">
        <label className="label">{props.label}</label>
        <Control definition={props.control_definition == undefined ? "has-icons-left" : props.control_definition}>
            <Input  definition={props.input_definition} 
                    onChangeEvent={props.onChange}
                    placeholder={props.placeholder} 
                    type={props.type} 
                    value={props.value}
                    custom={props.custom}
                    ></Input>
            {assembleIcon(props)}
            {props.help_value != undefined &&
            <p className={help_definition}>{props.help_value}</p>
            }
        </Control>
    </div>
}

function assembleIcon(props) {
    var code = <></>;
    if (props.control_definition != undefined) {
        var right = props.control_definition.includes("has-icons-right");
        if (right == true) {
            var definition = (props.icon_definition == undefined) ? "" : props.icon_definition;
            var icon_def = definition + " is-right";
            code = <Icon definition={icon_def} icon_name={props.icon_name}></Icon>;
        } else {
            code = <Icon definition={props.icon_definition} icon_name={props.icon_name}></Icon>;
        }
    } else {
        code = <Icon definition={props.icon_definition} icon_name={props.icon_name}></Icon>;
    }

    return code;
}


export default Field;