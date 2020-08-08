// @flow
import * as  React from 'react';
import Button from './Button';
import {validate} from '../tools/type_validations';
import File from './File';

type Props = {
    label?: string,
    onChange?: () => void,
    definition?: string,
    ref_data?: Object,
    onClick?: () => void,
    children?: string
}

const props_obj ={
    label: 'string',
    onChange: 'function',
    definition: 'string',
    ref_data: 'object',
    onClick: 'function'
}
/*
// Definition Equivalente a de Button, ou seja, o definition vai para Button
const FileButton = (props: Props) => {
    validate(props,props_obj,"FileButton");
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input type='file' onChange={props.onChange} style={{ display: 'none' }} ref={props.ref_data} />
                <Button definition={props.definition} onClick={props.onClick} label={props.children} />
            </div>
        </div>
    );
}*/


const FileButton = (props: Props) => {
    validate(props,props_obj,"FileButton");
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <File  onChange={props.onChange} style={{ display: 'none' }} ref={props.ref_data} />
                <Button definition={props.definition} onClick={props.onClick} label={props.children} />
            </div>
        </div>
    );
}
export default FileButton;