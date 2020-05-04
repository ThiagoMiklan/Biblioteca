// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button';
import checkerDefinition from '../tools/checker.js';



type Props = {
    definition?:string,
    children?: React.Node,
    onClickDelete?: ()=>  void,
    delete?: bool
}

const Tag = (props:Props)=>{
    checkerDefinition(props.definition,"Tag");
    var definition_tag = (props.definition == undefined) ? "": props.definition;
    var definition = classnames(getClassName("tag "+ definition_tag, "Tag"));
  
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
  return <span className ={classnames(getClassName(definition,"Tag"))}>{value}</span>;
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