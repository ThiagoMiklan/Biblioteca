// @flow
import * as React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import checkerDefinition from '../tools/checker.js';

/*
    - Componente que funciona como container
    - Sem eventos
*/

type Props ={
    definition?:string,
    children?: React.Node
}

const Control = (props:Props)=>{
    checkerDefinition(props.definition,"Control");
    
    var definition = getDefinition(props.definition);
    return(
        <div className={definition}>
              {
                    React.Children.map(props.children, (child, i) => {
                        return child
                    })
                }
        </div>
    );
}

function getDefinition(definition){
    if(definition == undefined || definition == ''){
        return classnames(getClassName("control icons-left","Control"));
    }else{
        return classnames(getClassName("control "+ definition,"Control"));
    }
}


Control.propTypes = {
    // Características do Bulma 
    definition: PropTypes.string
}

export default Control;
