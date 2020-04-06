import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button';


const Tag = (props)=>{
    var definition = classnames(getClassName("tag "+ props.definition, "Tag"));
    var isDelete = haveDelete(props.definition);
    return  <span className={definition}>
                {props.children}
                {isDelete == true && <Button onClick={props.onClickDelete} delete={true}></Button>
                }
            </span>
            
}

function haveDelete(definition){
    var isDelete = false;
    if(definition != undefined && typeof definition == 'string'){
        isDelete = definition.includes("delete");
    }
    
    return isDelete
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
    onClickDelete: PropTypes.func
}

export default Tag;