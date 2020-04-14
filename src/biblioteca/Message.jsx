import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
import Button from '../biblioteca/Button';

const Message = (props)=> {
    var definition = "message " + classname(getClassName(props.definition, "Message"));
        return (<article className={definition}>
            {assembleHeader(props.header,props.delete,props.onClickDelete)}
            {assembleBody(props.children)}
          
        </article>);    
}

function assembleDelete(onClickDelete){
    return <Button onClick={onClickDelete} delete={true}></Button>
}

function assembleHeader(name_header, isDelete, onClickDelete) {
    var header = "";
    if (name_header != undefined) {
        header = <div className="message-header">
            <p>{name_header}</p>
            {isDelete ==  true && assembleDelete(onClickDelete)}
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
    delete : PropTypes.bool,
    onClickDelete: PropTypes.func,
    header: PropTypes.string
}
export default Message;