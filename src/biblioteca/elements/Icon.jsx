import React from 'react'
import classnames from 'classnames';
import getClassNames from '../../tools/getClassName';

// Provisório
const Icon = (props) => {
    var definition =  classnames(getClassNames("icon "+props.definition, "Icon"));
    return (
        <>  
            {props.icon_right == true && <span>{props.children}</span>}
            <span className={definition}>
                <i className={props.icon_definition}></i>
            </span>
            {(props.icon_right == false || props.icon_right == undefined) && <span>{props.children}</span>}
        </>
    );
}


export default Icon;