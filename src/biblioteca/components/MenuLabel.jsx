import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from '../elements/Button.jsx';
import { renderToString } from 'react-dom/server';

class MenuItem extends React.Component{

    render(){
        return(
          <div>
              {assembleLabel(this.props.label)}
            
          </div>);
    }
}

function assembleLabel(label){
    return <p class="menu-label">
    {label}
  </p>;
}

export default MenuLabel