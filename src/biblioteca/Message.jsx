// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../biblioteca/Button';

type Props = {
    definition?:string,
    header?:string,
    delete?:bool,
    children?: React.Node,
    onClickDelete?: ()=> void
}

const Message = (props:Props)=> {
  
    var definition = (props.definition == undefined)? "message": "message "+props.definition
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