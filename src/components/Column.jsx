// @flow
import * as  React from 'react';
import { validate } from '../tools/type_validations.js';

type Props = {
    definition?: string,
    children?: React.Node
}

const props_obj = {
    definition: "string"
}

const Column = (props: Props) => {
    validate(props, props_obj, "Column");
    var definition = (props.definition == undefined) ? "column" : "column " + props.definition;
    return (
        <div className={definition}>{props.children}</div>
    );
}

export default Column;