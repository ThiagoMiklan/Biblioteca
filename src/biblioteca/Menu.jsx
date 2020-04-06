import React from 'react';
import PropTypes from 'prop-types';

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