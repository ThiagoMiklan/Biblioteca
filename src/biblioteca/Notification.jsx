// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Content from  './Content';

type Props = {
    delete?: bool,
    title?: string,
    onClickDelete?:()=> void,
    definition: string,
    children: React.Node,
    title?: string,
    subtitle?:string
}

const Notification = (props:Props) =>{
    var definition = (props.definition ==  undefined)? "notification": "notification "+props.definition;
    
    return(
            <div className={definition}>
                {props.delete == true && assembleDelete(props.onClickDelete)}
                {props.title == undefined && props.subtitle == undefined ? props.children: 
                    assembleTitleAndSubtitle(props)
                }
            </div>
    )
    
}

function assembleTitleAndSubtitle(props){
    return <>
                {<p className="title">{props.title}</p>}
                {<p className="subtitle">{props.subtitle}</p>}
                {<Content>{props.children}</Content>}
            </>
}

function assembleDelete(onClickDelete){
    return <Button delete={true} onClick={onClickDelete}></Button>
}

Notification.propTypes = {
    definition: PropTypes.string,
    delete : PropTypes.bool,
    onClickDelete : PropTypes.func,
    title: PropTypes.string
}

export default Notification;