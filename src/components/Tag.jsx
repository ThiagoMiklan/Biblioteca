// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { validate } from '../tools/type_validations';

type Props = {
    definition?:string,
    children?: React.Node,
    onClickDelete?: ()=>  void,
    delete?: bool
}

const props_obj ={  
    definition:"string",
    onClickDelete: "function",
    delete: "boolean"
}

const Tag = (props:Props)=>{
    validate(props,props_obj);
    var definition = (props.definition == undefined) ? "tag": "tag "+props.definition;
    
    return  <span className={definition}>
                {props.children}
                {props.delete == true && <Button onClick={props.onClickDelete} delete={props.delete}></Button>
                }
            </span>
}

 

function assembleTag(props) {
    var tag = "";
    
    if (Array.isArray(props.tag)) {
        tag = assembleListOfTags(props);
    } else {
        tag = assembleSingleTag(props.definition,props.value);
    }

    return tag;
}

function assembleSingleTag(definition,value) {
  return <span className ={definition}>{value}</span>;
}


function assembleListOfTags(props) {
   var tag = <div className="tags">
                {props.tag.map(tag => assembleSingleTag(tag["definition"],tag["value"]))}
             </div>

  
    return tag;
}



Tag.propTypes = {
    definition: PropTypes.string,
    onClickDelete: PropTypes.func,
    delete: PropTypes.bool
}

export default Tag;