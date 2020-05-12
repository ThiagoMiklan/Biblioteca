// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from './Button.jsx';
import checkerDefinition from '../tools/checker.js';


type Props = {
    delete?: bool,
    title?: string,
    onClickDelete?:()=> void,
    definition: string,
    children: React.Node
}

const Notification = (props:Props) =>{
    checkerDefinition(props.definition,"Notification");
    var definition = "notification " + classnames(getClassName(props.definition,"Notification"));
    return(
            <div className={definition}>
                {props.title != undefined && 
                    <div className='title'>
                    {props.title}
                    </div>
                }
                {props.delete == true && assembleDelete(props.onClickDelete)}
                {props.children}
            </div>
    )
    
}



function assembleDelete(onClickDelete){
    return <Button onClick={onClickDelete} delete={true}></Button>
}

Notification.propTypes = {
    definition: PropTypes.string,
    delete : PropTypes.bool,
    onClickDelete : PropTypes.func,
    title: PropTypes.string
}

export default Notification;