// @flow 
import React from 'react';
import {validate} from '../tools/type_validations';

type Props ={
    definition?:string,
    image_definition?: string,
    src?:string,
     // abaixo adicionado posterior apêndice B
    onClick?: ()=> void,
}

const props_obj ={
    definition:'string',
    image_definition: 'string',
    src:'string'
}

const Image = (props:Props)=>{
    validate(props,props_obj,"Image");
    var definition = (props.definition ==  undefined) ? "image" : "image "+ props.definition;
    
    return (<figure className={definition} onClick={props.onClick}  >
                <img className={props.image_definition} src={props.src}/>
            </figure>);
}

export default Image;