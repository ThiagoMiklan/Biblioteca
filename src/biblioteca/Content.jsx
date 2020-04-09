import React from 'react';
import getClassName from '../tools/getClassName';
import className from 'classnames';


// Componente que funciona como um tipo de container
// Fornece um componente para servir de base para outros

const Content = (props) =>{
    var definition =  className(getClassName("content "+props.definition,"Content"));
     return (
        <div class={definition}>
            {props.children}
        </div>
        );
    
}

export default Content;