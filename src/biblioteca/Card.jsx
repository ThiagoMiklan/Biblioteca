// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Icon from './Icon';

type Props ={
    title?:string,
    title_definition?: string,
    definition?:string,
    src?:string,
    custom_header?:React.Node,
    itens_footer?: Array<Object>,
    footer_definition: ?string,
    icon_name?:string,
    icon_definition?:string,
    header_definition?: string,
    card_header_definition?:string,
    image_definition?:string,
    children?:React.Node,
    card_image_definition?: string

}

const Card = (props:Props) => {
    // se title for undefined não tem motivo para criar header
    // se src for undefined não tem motivo para criar card image
    // se itens_footer for undefined não tem pq criar footer
	var definition = (props.definition == undefined) ? "card" : "card "+ props.definition;
    return (
        <div className={definition}>
            {assembleHeader(props)}
            {props.src != undefined && assembleCardImage(props)}
            {assembleContent(props)}
            {props.itens_footer != undefined && assembleFooter(props)}
        </div>
    );
}

//  Essa função server para adicionar uma propriedade de customização do header de Card
// Com ela é possível tanto usar o Header Padrão, como informar seu próprio componente para header
// através da props custom.header;
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

// title: Testando,  icon_name: "fas fa-angle-down", icon_definition: "info", href
// expandido para diversos tipos de valores
function assembleHeaderDefault(props) {
    var header_definition = (props.header_definition == undefined)?"card-header" :"card-header "+ props.header_definition;
    var card_header_definition =(props.card_header_definition == undefined) ? "card-header-icon" : "card-header-icon " + props.card_header_definition;
    var title_definition = (props.title_definition == undefined) ? "card-header-title" : "card-header-title " + props.title_definition;

    return <header className={header_definition}>
        <div className={title_definition}>
            {props.title}
        </div>
        {props.icon_name != undefined && <a href="#" className={card_header_definition} >
            <Icon definition={props.icon_definition} icon_name={props.icon_name}></Icon>
        </a>
        }

    </header>
}

function assembleHeaderCustom(props) {
    var header_definition =(props.header_definition ==  undefined)? "card-header" : "card-header " + props.header_definition;

    return <header className={header_definition}>
        {props.custom_header}
    </header>
}

// src(props):  image_definition(props): 
// Limite de uma imagem
function assembleCardImage(props) {
    
    var card_image_definition =(props.card_image_definition == undefined)? "card-image":"card-image " + props.card_image_definition
    return <div className={card_image_definition}>
        <Image definition={props.image_definition} src={props.src}></Image>
    </div>
}

// content
function assembleContent(props) {
    return <div className="card-content ">
        {props.children}
    </div>;
}

// itens_footer(props) footer_definition
// Limitado apenas nessa formado de lista
function assembleFooter(props) {
    var footer_definition = (props.footer_definition == undefined)? "card-footer": "card-footer " + props.footer_definition
    var code = <></>;
    if(props.itens_footer != undefined){
        code =  <footer className={footer_definition}>
        {props.itens_footer.map(item => assembleItemFooter(item))}
    </footer>
    }
    return code;
}

function assembleItemFooter(item) {
    return <p className="card-footer-item">
        <span onClick={item["onClick"]} style={{ cursor: "pointer" }}>
            {item["value"]}
        </span>
    </p>
}

Card.propTypes = {
    title: PropTypes.string,
    header_definition: PropTypes.string,
    card_header_definition: PropTypes.string,
    content_definition: PropTypes.string,
    itens_footer: PropTypes.array,
    footer_definition: PropTypes.string,
    image_definition: PropTypes.string,
    src: PropTypes.string,
    icon_definition: PropTypes.string,
    icon_name: PropTypes.string,
    card_image_definition: PropTypes.string,
    custom_header: PropTypes.any,
	definition: PropTypes.string
}



export default Card;