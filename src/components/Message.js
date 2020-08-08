// @flow
import * as React from 'react';
import Button from './Button';
import { validate } from '../tools/type_validations';

type Props = {
    definition?:string,
    header?:string,
    header_definition?: string,
    delete?:bool,
    children?: React.Node,
    onClickDelete?: ()=> void
}

const prop_obj = {
    definition:"string",
    header:"string",
    delete:"boolean",
   onClickDelete: "function"
}


const Message = (props:Props)=> {
    validate(props, prop_obj,"Message");
    var definition = (props.definition == undefined)? "message": "message "+props.definition
        return (<article className={definition}>
            {assembleHeader(props.header,props.delete,props.onClickDelete,props.header_definition)}
            {assembleBody(props.children)}
          
        </article>);    
}

function assembleDelete(onClickDelete){
    return <Button onClick={onClickDelete} delete={true}></Button>
}

function assembleHeader(name_header, isDelete, onClickDelete,header_definition) {
    var header = "";
    if (name_header != undefined) {
        let definition = (header_definition == undefined)? "message-header" : "message-header "+ header_definition;
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

export default Message;