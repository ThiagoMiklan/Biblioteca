// @flow
import * as React from 'react';
import Image from './Image';
import Content from './Content';
import Button from './Button';
import Level from './Level';
import { validate } from '../tools/type_validations';
import {MediaObjectItem} from '../tools/types';

type Props = {
    definition?: string,
    image_definition?: string,
    figure_definition?: string,
    content_definition?: string,
    children?: React.Node,
    src?: string,
    right?: React.Node,
    itens?: Array<MediaObjectItem>,
    level_definition?: string,
    left_definition?: string,
    right_definition?: string,
    content_definition?: string,
    onClickDelete?: () => void
}

const props_obj = {
    definition: 'string',
    image_definition: 'string',
    figure_definition: 'string',
    content_definition: 'string',
    src: 'string',
    itens: 'array',
    level_definition: 'string',
    left_definition: 'string',
    right_definition: 'string',
    content_definition: 'string',
    onClickDelete: 'function'

}

const MediaObject = (props: Props) => {
    let definition = (props.definition == undefined) ? "media" : "media " + props.definition;
    validate(props,props_obj,"MediaObject");

    return <article className={definition}>
        {assembleLeftMedia(props)}
        {assembleContentMedia(props)}
        {assembleRightMedia(props)}
    </article>
}

function assembleLeftMedia(props: Props) {
    let definition = (props.left_definition == undefined) ? "media-left" : "media-left " + props.left_definition;

    return <figure className={definition}>
        <Image definition={props.figure_definition} image_definition={props.image_definition} src={props.src} />
    </figure>
}

function assembleContentMedia(props: Props) {
    let definition = (props.content_definition == undefined) ? "media-content" : "media-content " + props.content_definition;

    return <div className={definition}>
        <Content definition={definition}>
            {props.children}
        </Content>
        {assembleDefaultLevel(props)}
    </div>
}

function assembleDefaultLevel(props: Props) {
    return <Level definition={props.level_definition} itens={props.itens}></Level>
}

function assembleRightMedia(props: Props) {
    let definition = (props.right_definition == undefined) ? "media-right" : "media-right " + props.right_definition;

    return <div className={definition}>
        {props.right != undefined ? props.right : <Button onClick={props.onClickDelete} delete={true}> </Button>}
    </div>
}


export default MediaObject;