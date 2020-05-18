import React from 'react';
import Button from './Button';

// Definition Equivalente a de Button, ou seja, o definition vai para Button
const FileButton = (props) => {

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