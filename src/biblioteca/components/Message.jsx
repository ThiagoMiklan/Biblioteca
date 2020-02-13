import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

class Message extends React.Component {

    render() {
        var definition = "message " + classname(getClassName(this.props.definition, "Message"));
        return (<article class={definition}>
            {assembleHeader(this.props.name_header,this.props.button)}
            {assembleBody(this.props.message)}
        </article>);
    }

}
function assembleHeader(name_header, button) {
    var header = "";
    if (name_header != undefined) {
        header = <div class="message-header">
            <p>{name_header}</p>
            {button}
        </div>
    }

    return (header);
}


function assembleBody(message) {
    return (<div class="message-body">
      {message}
    </div>);
}
export default Message;