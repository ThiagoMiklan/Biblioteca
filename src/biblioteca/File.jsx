import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Icon from './Icon';

const File = (props)=>{
  var definition= classnames(getClassName("file "+props.definition,"File"));

    return <div className={definition}>
    <label class="file-label">

      <input class="file-input" type="file" name={props.input_name}/>
      <span className="file-cta">
        <Icon definition={props.icon_definition} icon_name={props.icon_name}/>
        <span class="file-label">
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
    input_name: PropTypes.string,
    icon_name: PropTypes.string,
    icon_definition: PropTypes.string,
    definition: PropTypes.string,
    label: PropTypes.string
}

export default File;