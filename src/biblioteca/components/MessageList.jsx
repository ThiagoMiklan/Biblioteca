import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

class MessageList extends React.Component{

    render(){
       return ( <div>
            {this.props.children}
        </div>);
     }
}

export default MessageList;