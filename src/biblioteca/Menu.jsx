import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button.jsx';
import MenuItem from '../components/MenuItem.jsx';
import { renderToString } from 'react-dom/server';

class Menu extends React.Component{
    
    render(){
        
        return(
            <aside class="menu">
              {this.props.children}
            </aside>
        );
    }

}


Menu.propTypes = {
    menu_itens: PropTypes.array,
    sub_itens: PropTypes.array
}

export default Menu;