// @flow 
import React from 'react';
import PropTypes from 'prop-types';

type Props ={
    definition?:string,
    src?:string
}

const Image = (props:Props)=>{
    return (<figure className={"image "+props.definition} >
            <img className={props.image_definition} src={props.src}/>
        </figure>);
}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    image_definition: PropTypes.string,
    src: PropTypes.string.isRequired
}

export default Image;