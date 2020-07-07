// @flow
import React from 'react'
import Icon from './Icon';
import { validate } from '../tools/type_validations';


type Props = {
  icon_name?: string,
  icon_definition?: string,
  definition?: string,
  label?: string,
  filename?: string,
  ref?: string,
  onChange?: () => void
}

const props_obj = {
  icon_name: 'string',
  icon_definition: 'string',
  definition: 'string',
  label: 'string',
  filename: 'string',
  ref: 'string',
  onChange: 'function'
}

const File = (props: Props) => {
  validate(props, props_obj, "File");

  var definition = (props.definition == undefined) ? "file" : "file " + props.definition;

  return <div className={definition}>
    <label className="file-label">
      <input onChange={props.onChange} className="file-input" type="file" ref={props.ref} />
      <span className="file-cta">
        {(props.icon_name != undefined) && <Icon definition={props.icon_definition} icon_name={props.icon_name} />}
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

export default File;