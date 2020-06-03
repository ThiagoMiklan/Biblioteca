// @flow
import * as React from 'react';
import {validate} from '../tools/type_validations.js';

type Props = {
  definition?: string,
  children?: React.Node
 }

const props_obj ={
    definition:  'string'
}

const Content = (props: Props) =>{
    validate(props, props_obj);
    var definition =  (props.definition == undefined) ? "content": "content "+ props.definition;
     return (
        <div class={definition}>
            {props.children}
        </div>
        );
    
}

export default Content;