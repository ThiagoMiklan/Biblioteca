// @flow
import * as React from 'react'
import { validate } from '../tools/type_validations.js';

type Props = {
    definition?: string,
    right?: bool,
    onClick?: () => void,
    children?: React.Node,
    icon_name?: string
}

const props_obj = {
    definition: "string",
    right: "boolean",
    onClick: "function",
    icon_name: "string"
}

const Icon = (props: Props) => {
    validate(props, props_obj,"Icon");
    var definition = (props.definition == undefined) ? "icon" : "icon " + props.definition;
    return (
        <>
            {(props.right == false || props.right == undefined) ?
                <>
                    <span onClick={props.onClick} className={definition}>
                        <i className={props.icon_name}></i>
                    </span>
                    <span>{props.children}</span>
                </>
                :
                <>
                    <span>{props.children}</span>
                    <span onClick={props.onClick} className={definition}>
                        <i className={props.icon_name}></i>
                    </span>
                </>

            }

        </>
    );
}

export default Icon;

