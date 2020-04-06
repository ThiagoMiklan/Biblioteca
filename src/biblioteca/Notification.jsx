import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button.jsx';


const Notification = (props) =>{
    var definition = "notification " + classnames(getClassName(props.definition,"Notification"));
    
    return(
            <div className={definition}>
                {addButtonDelete(props)}
                {props.children}
            </div>
    );
    
}

function addButtonDelete(props){
    var button_del_code = "";
    if(props.delete == true){
        button_del_code = <Button delete={true} onClick ={props.onClickDelete}/>
    }

    return button_del_code;
}

Notification.propTypes = {
    definition: PropTypes.string,
    button : PropTypes.element,
    onClickDelete : PropTypes.func
}

export default Notification;