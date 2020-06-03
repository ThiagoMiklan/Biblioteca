// @flow
import * as React from 'react';

// Simples componente para utilizar Field como content
// Um exemplo seria um componente que exibe uma imagem

type Props={
  label?:string,
  children?: React.Node
}

const FieldContent = (props:Props)=>{

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