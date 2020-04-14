import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';


const Image = (props)=>{
    return (<figure className={classnames(getClassName(props.definition, "Image"))} >
            <img src={props.src}/>
        </figure>);
}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;