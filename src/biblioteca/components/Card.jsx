import {React,useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import { useState } from 'react';
 
const Card = (props) =>{

    return (
        <div className="card">
            {assembleImage()}

        </div>
    );
}

function assembleImage(props){
    return (
            <div className="card-image">  
              {this.props.card_image}
            </div>
            );
}


export default Card;