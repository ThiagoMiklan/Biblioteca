// @flow
import * as React from 'react';
import { validate } from '../tools/type_validations.js';

type Props = {
    definition?: string,
    children?: React.Node
}

const props_obj = {
    definition: 'string'
}

const Columns = (props: Props) => {
    validate(props, props_obj, "Columns");
    var definition = (props.definition == undefined) ? "columns" : "columns " + props.definition;
    return <div className={definition}>
        {
            React.Children.map(props.children, (child, i) => {
                return child;
            })
        }
    </div>

}

export default Columns