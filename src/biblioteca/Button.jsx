import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import button_props from '../props/ButtonProps';


class Button extends React.Component {

    constructor(props){
        super(props);

        this.state  = {definition:props.definition};
       // this.props.onClick.bind(this);
    }

   

   /* render() {
        return (
            <button
                className={classnames(getClassNames(this.state))} onClick={this.props.onClick.bind(this)}>
                {this.props.value}
         </button>);
    }*/
    render() {
        return (
            <button
                className={classnames(getClassNames(this.state))} onClick={getClickEvent(this.props.onClick).bind(this)}>
                {this.props.value}
         </button>);
    }
}

// caso seja informado onClick ele retorna a função retornada, senão retorna uma função vazia. Método criado para evitar problemas com undefined
function getClickEvent(onClick){

    if(typeof onClick == "function"){
        return onClick;
    }else{
        return ()=> {};
    }
    
}


function getClassNames(props){
    var definition  = props.definition;
    var array_definition = definition.split(" ");
    var size = array_definition.length;
    var classObj = new Object();
    
    for(let i = 0 ; i < size ;i++){
        let key =  (button_props[array_definition[i]]);
        let value = (button_props[array_definition[i]]);
        classObj[key] = value;
    }
    
    return classObj;
}


Button.propTypes = {
    value: PropTypes.string,
    definition: PropTypes.string,
    onClick: PropTypes.func
};


export default Button;