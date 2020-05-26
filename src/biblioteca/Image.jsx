// @flow 
import React from 'react';
import PropTypes from 'prop-types';
type Props ={
    definition?:string,
    src?:string
}

const Image = (props:Props)=>{
    return (<figure className={props.definition} >
            <img src={props.src}/>
        </figure>);
}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;