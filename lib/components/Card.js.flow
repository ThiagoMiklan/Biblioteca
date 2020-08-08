// @flow
import * as React from 'react';
import Image from './Image';
import Icon from './Icon';
import { validate } from '../tools/type_validations.js';
import type {CardItem} from '../tools/types';

type Props = {
    title?: string,
    title_definition?: string,
    definition?: string,
    src?: string,
    custom_header?: React.Node,
    itens_footer?: Array<CardItem>,
    footer_definition?: string,
    icon_name?: string,
    icon_definition?: string,
    header_definition?: string,
    card_header_definition?: string,
    image_definition?: string,
    children?: React.Node,
    card_image_definition?: string,
    icon_onClick?: ()=> void,
    image_onClick?: ()=> void,

}

var props_obj = {
    title: "string",
    title_definition: "string",
    definition: "string",
    src: "string",
    itens_footer: "array",
    footer_definition: "string",
    icon_name: "string",
    icon_definition: "string",
    header_definition: "string",
    card_header_definition: "string",
    image_definition: "string",
    card_image_definition: "string",
    icon_onClick: "function",
    image_onClick: "function"
}

const Card = (props: Props) => {
    validate(props, props_obj,"Card");
    var definition = (props.definition == undefined) ? "card" : "card " + props.definition;
    return (
        <div className={definition}>
            {assembleHeader(props)}
            {props.src != undefined && assembleCardImage(props)}
            {assembleContent(props)}
            {props.itens_footer != undefined && assembleFooter(props)}
        </div>
    );
}


function assembleHeader(props) {
    var header = <></>;
    if (props.custom_header != undefined) {
        header = assembleHeaderCustom(props);
    } else {
        if (props.title != undefined) {
            header = assembleHeaderDefault(props);
        }
    }
    return header;
}


function assembleHeaderDefault(props) {
    var header_definition = (props.header_definition == undefined) ? "card-header" : "card-header " + props.header_definition;
    var card_header_definition = (props.card_header_definition == undefined) ? "card-header-icon" : "card-header-icon " + props.card_header_definition;
    var title_definition = (props.title_definition == undefined) ? "card-header-title" : "card-header-title " + props.title_definition;

    return <header className={header_definition}>
        <div className={title_definition}>
            {props.title}
        </div>
        {props.icon_name != undefined && <a href="#" className={card_header_definition} >
            <Icon definition={props.icon_definition} icon_name={props.icon_name} onClick={props.icon_onClick}></Icon>
        </a>
        }

    </header>
}

function assembleHeaderCustom(props) {
    var header_definition = (props.header_definition == undefined) ? "card-header" : "card-header " + props.header_definition;

    return <header className={header_definition}>
        {props.custom_header}
    </header>
}


function assembleCardImage(props) {

    var card_image_definition = (props.card_image_definition == undefined) ? "card-image" : "card-image " + props.card_image_definition
    return <div className={card_image_definition}>
        <Image definition={props.image_definition} src={props.src} onClick={props.image_onClick} ></Image>
    </div>
}

function assembleContent(props) {
    return <div className="card-content ">
        {props.children}
    </div>;
}


function assembleFooter(props) {
    var footer_definition = (props.footer_definition == undefined) ? "card-footer" : "card-footer " + props.footer_definition
    var code = <></>;
    if (props.itens_footer != undefined) {
        code = <footer className={footer_definition}>
            {props.itens_footer.map(item => assembleItemFooter(item))}
        </footer>
    }
    return code;
}

function assembleItemFooter(item) {
    return <p className="card-footer-item">
        <span onClick={item["onClick"]} style={{ cursor: "pointer" }} {...item["custom"]}>
            {item["value"]}
        </span>
    </p>
}


export default Card;