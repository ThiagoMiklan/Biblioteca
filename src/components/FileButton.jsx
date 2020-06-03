// @flow
import * as  React from 'react';
import Button from './Button';

type Props ={
    label?: string,
    onChange?: ()=>void,
    definition?: string,
    ref_data?: string,
    onClick?: ()=>void,
    children?: React.Node
}

// Definition Equivalente a de Button, ou seja, o definition vai para Button
const FileButton = (props:Props) => {

    return (
        <div className='field'>
        <label className='label'>{props.label}</label>
            <div className='control'>
                <input type='file'onChange={props.onChange} style={{ display: 'none' }} ref={props.ref_data}/>
                    <Button definition={props.definition} onClick={props.onClick}>{props.children}</Button>
        </div>
</div>
    );
}

export default FileButton;