// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
    children?: React.Node
}

const Menu = (props:Props) =>{
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