// @flow
import React from 'react'
import PropTypes from 'prop-types';
import Icon from './Icon';



type Props = {
    icon_name?: string,
    icon_definition?: string,
    definition?: string,
    label?: string,
    filename?:string,
    ref?: string,
    onChange?: ()=> void
}

const File = (props:Props)=>{
  var definition = (props.definition == undefined)? "file": "file "+props.definition;
  
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