// @flow
import * as React from 'react';
import { validate } from '../tools/type_validations.js';

// custom

type Props = {
    disabled?: bool,
    delete?: bool,
    label?: React.Node,
    definition?: string,
    children?: React.Node,
    custom?: Object,
    onClick?: () => void
}

const props_obj = {
    disabled: 'boolean',
    delete: 'boolean',
    definition: 'string',
    custom: 'object',
    onClick: 'function'
}

const Button = (props: Props) => {
    validate(props, props_obj, "Button");
    var definition = getDefinition(props);
    return <button
        {...props.custom}
        disabled={props.disabled === true ? true : false}
        className={definition}
        onClick={props.onClick}
    >
        {props.label}
    </button>
        ;
}

function getDefinition(props) {
    var definition = "";

    if (props.delete === true) {
        definition = "delete";
    } else {
        definition = (props.definition === undefined) ? "button" : "button " + props.definition;
    }

    return definition;
}



export default Button;