// @flow
import * as React from 'react';
import FieldContent from './FieldContent';
import Button from './Button';
import {validate} from '../tools/type_validations';

// Para ver a diferença entre FieldButton e Button, basta alocar dois buttons em sequencia
// e um button e um fieldbutton, que será possível ver uma diferença de espaçamento

type Props ={
    field_definition?: string,
    label?:string,
    button_definition?: string,
    onClick?: ()=> void,
    disabled?: bool,
    value?: React.Node,
    children: string 
}

const props_obj = {
    field_definition: 'string',
    label:'string',
    button_definition: 'string',
    onClick: 'function',
    disabled: 'boolean',
}

const FieldButton = (props:Props) => {
    validate(props,props_obj,"FieldButton");
   return <FieldContent definition={props.field_definition} label={props.label}>
        <Button definition={props.button_definition}
            onClick={props.onClick}
            disabled={props.disabled}
            label= {props.children}
            />
    </FieldContent>
}


export default FieldButton;