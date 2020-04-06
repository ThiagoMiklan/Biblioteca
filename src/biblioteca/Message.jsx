import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
 ;

class Message extends React.Component {

    render() {
        var definition = "message " + classname(getClassName(this.props.definition, "Message"));
        return (<article className={definition}>
            {assembleHeader(this.props.name_header,this.props.button)}
            {assembleBody(this.props.children)}
        </article>);
    }

}
function assembleHeader(name_header, button) {
    var header = "";
    if (name_header != undefined) {
        header = <div className="message-header">
            <p>{name_header}</p>
            {button}
        </div>
    }

    return (header);
}


function assembleBody(message) {
    return (<div className="message-body">
      {message}
    </div>);
}

Message.propTypes ={
    definition: PropTypes.string,
    button : PropTypes.element,
    name_header: PropTypes.string
}
export default Message;