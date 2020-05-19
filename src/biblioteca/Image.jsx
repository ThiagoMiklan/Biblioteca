// @flow 
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';

type Props ={
    definition?:string,
    src?:string
}

const Image = (props:Props)=>{
    return (<figure className={classnames(getClassName(props.definition, "Image"))} >
            <img src={props.src}/>
        </figure>);
}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;