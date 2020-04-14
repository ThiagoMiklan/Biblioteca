import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button.jsx';


const Notification = (props) =>{
    var definition = "notification " + classnames(getClassName(props.definition,"Notification"));
    return(
            <div className={definition}>
                {props.delete == true && assembleDelete(props.onClickDelete)}
                {props.children}
            </div>
    );
    
}

function assembleDelete(onClickDelete){
    return <Button onClick={onClickDelete} delete={true}></Button>
}

Notification.propTypes = {
    definition: PropTypes.string,
    delete : PropTypes.bool,
    onClickDelete : PropTypes.func
}

export default Notification;