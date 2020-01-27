import React from 'react'
import PropTypes from 'prop-types'
import map from '../Elements.js'

class NavigationBar extends React.Component{

   
    render(){
      return(
        <h1>Testando</h1>
        );
    }

}


function generateItens(itens){
    map.get();    
    
}

NavigationBar.propTypes = {
    path_img_brand : PropTypes.string
}


export default NavigationBar;

