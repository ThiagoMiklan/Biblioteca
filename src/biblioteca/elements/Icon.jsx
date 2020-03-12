import React from 'react'
import classnames from 'classnames';
import getClassNames from '../../tools/getClassName';

// Provisório
const Icon = (props) => {
    var definition =  classnames(getClassNames("icon "+props.definition, "Icon"));
    return (
        <div>
            <span class={definition}>
                <i class={props.icon_definition}></i>
            </span>
            <span>{props.children}</span> 
        </div>
    );
}

export default Icon;