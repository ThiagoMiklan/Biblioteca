import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from '../elements/Button.jsx';
import { renderToString } from 'react-dom/server';

class Menu extends React.Component{
    
    render(){
        return(
            <aside class="menu">
                
            </aside>

        );
    }

}


Menu.propTypes = {
    menu_itens: PropTypes.array,
    sub_itens: PropTypes.array
}

export default Menu;