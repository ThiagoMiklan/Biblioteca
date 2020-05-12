// @flow
import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Icon from './Icon';
import checkerDefinition from '../tools/checker.js';


type Props = {
    icon_name?: string,
    icon_definition?: string,
    definition?: string,
    label?: string,
    filename?:string,
    onChange?: ()=> void
}

const File = (props:Props)=>{
  checkerDefinition(props.definition,"File");
  var file_definition = (props.definition == undefined)? "": props.definition;
  var definition= classnames(getClassName("file "+file_definition,"File"));

    return <div className={definition}>
    <label className="file-label">
      <input onChange={props.onChange} className="file-input" type="file" ref={props.ref}/>
      <span className="file-cta">
        {(props.icon_name != undefined) && <Icon definition={props.icon_definition} icon_name={props.icon_name}/>}
        <span className="file-label">
            {props.label}
        </span>
        </span>
        {definition.includes("has-name") == true && props.filename != undefined &&
          <span className="file-name">
              {props.filename}
          </span>
        }
    </label>
   
  </div>
}

File.propTypes ={
    icon_name: PropTypes.string,
    icon_definition: PropTypes.string,
    definition: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default File;