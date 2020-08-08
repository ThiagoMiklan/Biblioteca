// @flow
import * as React from 'react';
import { validate } from '../tools/type_validations.js';

type Props = {
    children?: React.Node,
    definition?: string
}

const props_obj = {
    definition: "string"
}

const Menu = (props:Props) =>{
    validate(props, props_obj,"Menu");
    var definition = (props.definition == undefined) ? "menu" : "menu "+ props.definition;
        return(
            <aside className={definition}>
              {props.children}
            </aside>
        );
}

export default Menu;  