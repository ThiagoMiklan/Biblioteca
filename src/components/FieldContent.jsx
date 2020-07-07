// @flow
import * as React from 'react';
import {validate} from '../tools/type_validations';

type Props={
  label?:string,
  children?: React.Node
}

const props_obj ={
  label: 'string',
}

const FieldContent = (props:Props)=>{
    validate(props,props_obj, "FieldContent");
    return (
        <div className='field'>
          <label className='label'>{props.label}</label>
          <div className='control'>
            {props.children}
          </div>
        </div>
    );

}

export default FieldContent;