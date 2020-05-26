// @flow
import * as React from 'react'
import PropTypes from 'prop-types';
import '../css/all';

type Props = {
    definition?: string,
    icon_right?: bool,
    onClick? : ()=> void,
    children?: React.Node,
    icon_name?: string
}

const Icon = (props:Props) => {
    var definition = (props.definition == undefined) ? "icon": "icon " +props.definition;
   
    return (
        <>  
            {(props.icon_right == false || props.icon_right == undefined) && <span>{props.children}</span>}
            <span onClick={props.onClick} className={definition}>
                <i className={props.icon_name} aria-hidden="true" ></i>
            </span>
            {props.icon_right == true && <span>{props.children}</span>}
            
        </>
    );
}

export default Icon;