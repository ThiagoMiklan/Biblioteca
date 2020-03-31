import React from 'react'
import classnames from 'classnames';
import getClassNames from '../../tools/getClassName';
import '../../css/all';
import PropTypes from 'prop-types';

// Provisório
const Icon = (props) => {
    var definition =  classnames(getClassNames("icon "+props.definition, "Icon"));
    return (
        <>  
            {props.icon_right == true && <span>{props.children}</span>}
            <span onClick={props.onClick} className={definition}>
                <i className={props.icon_name}></i>
            </span>
            {(props.icon_right == false || props.icon_right == undefined) && <span>{props.children}</span>}
        </>
    );
}




export default Icon;