import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import Icon from '../elements/Icon';

const File = (props)=>{
    return <div class="file">
    <label class="file-label">
      <input class="file-input" type="file" name="resume"/>
        <Icon definition={props.icon_definition} icon_name={props.icon_name}/>
        <span class="file-label">
            {props.label}
        </span>
      
    </label>
  </div>
}

File.propTypes ={
    icon_name: PropTypes.string,
    icon_definition: PropTypes.string,
    definition: PropTypes.string,
    label: PropTypes.string
}

export default File;