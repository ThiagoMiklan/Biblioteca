// @flow 
import React from 'react';
import PropTypes from 'prop-types';

type Props ={
    definition?:string,
    image_definition?: string,
    src?:string
}

const Image = (props:Props)=>{
    var definition = (props.definition ==  undefined) ? "image" : "imagem "+ props.definition;
    
    return (<figure className={definition} >
            <img className={props.image_definition} src={props.src}/>
        </figure>);
}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    image_definition: PropTypes.string,
    src: PropTypes.string.isRequired
}

export default Image;