// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations.js';

type Props = {
    children?: React.Node,
    definition?: string
}

const props_obj = {
    definition: "string"
}

const Menu = (props:Props) =>{
    validate(props, props_obj);
    var definition = (props.definition == undefined) ? "menu" : "menu "+ props.definition;
        return(
            <aside className={definition}>
              {props.children}
            </aside>
        );
}


Menu.propTypes = {
    menu_itens: PropTypes.array,
    sub_itens: PropTypes.array
}

export default Menu;