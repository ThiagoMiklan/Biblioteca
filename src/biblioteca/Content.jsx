// @flow
import * as React from 'react';
import getClassName from '../tools/getClassName';
import className from 'classnames';
import checkerDefinition from '../tools/checker.js';


// Componente que funciona como um tipo de container
// Fornece um componente para servir de base para 

type Props = {
  definition?: string,
  children?: React.Node
 }

const Content = (props: Props) =>{
    var definition = (props.definition == undefined)? "": props.definition;
    checkerDefinition(definition,"Content");
    var definition =  className(getClassName("content "+definition,"Content"));
     return (
        <div class={definition}>
            {props.children}
        </div>
        );
    
}

export default Content;