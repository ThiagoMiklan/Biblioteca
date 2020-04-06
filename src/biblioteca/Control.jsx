import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import { renderToString } from 'react-dom/server';

const Control = (props)=>{
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


export default Control;
