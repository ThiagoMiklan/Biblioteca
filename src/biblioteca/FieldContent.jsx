import React from 'react';

// Simples componente para utilizar Field como content
// Um exemplo seria um componente que exibe uma imagem

const FieldContent = (props)=>{

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