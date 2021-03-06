// @flow
import * as React from 'react';
import Button from './Button.js';
import Content from './Content';
import { validate } from '../tools/type_validations.js';

type Props = {
    delete?: bool,
    title?: string,
    onClickDelete?: () => void,
    definition: string,
    children?: React.Node,
    title?: string,
    subtitle?: string
}
const props_obj = {
    delete: 'boolean',
    title: "string",
    onClickDelete: "function",
    definition: "string",
    title: "string",
    subtitle: "string"
}
const Notification = (props: Props) => {
    validate(props, props_obj, "Notification");
    var definition = (props.definition == undefined) ? "notification" : "notification " + props.definition;
    return (
        <div className={definition}>
            {props.delete == true && assembleDelete(props.onClickDelete)}
            {props.title == undefined && props.subtitle == undefined ? props.children :
                assembleTitleAndSubtitle(props)
            }
        </div>
    )

}

function assembleTitleAndSubtitle(props) {
    return <>
        {<p className="title">{props.title}</p>}
        {<p className="subtitle">{props.subtitle}</p>}
        {<Content>{props.children}</Content>}
    </>
}

function assembleDelete(onClickDelete) {
    return <Button delete={true} onClick={onClickDelete}></Button>
}

export default Notification;