import React from 'react';
import getClassName from '../tools/getClassName';
import className from 'classnames';
import {renderToString} from 'react-dom/server'

// Componente que funciona como um tipo de container
// Semelhante ao ButtonList, fornece um componente para servir de base para outros

const Content = (props) =>{
    var definition =  className(getClassName("content "+props.definition,"Content"));
     return (
        <div class={definition}>
            {props.children}
        </div>
        );
    
}

export default Content;