// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
    children?: React.Node
}

const Menu = (props:Props) =>{
        return(
            <aside class="menu">
              {props.children}
            </aside>
        );
}


Menu.propTypes = {
    menu_itens: PropTypes.array,
    sub_itens: PropTypes.array
}

export default Menu;