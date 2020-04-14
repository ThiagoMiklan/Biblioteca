import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';

 
const Card = (props)=>{

    return (<div className="card">
            {assembleImage(props)}
        </div>
    );
}

function assembleImage(props) {
    return (
        <div className="card-image">
            {props.card_image}
        </div>
    );
}

Card.propTypes ={
    card_image : PropTypes.element,
    card_content : PropTypes.element.isRequired,
    card_head_name : PropTypes.string
}



export default Card;