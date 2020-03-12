import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import button_props from '../../props/ButtonProps.js'
import getClassNames from '../../tools/getClassName';

/*
Para construção do button, foi usado um pouco da ideia presente no trabalho correlato
react-bootstrap, onde o componente button é chamado através do react e lhe é passado um valor
que definirá sua cor, esse valor é único, como "danger,primary" exatamente como boa parte
dos componentes foram desenvolvidos, porém sem o uso de tantas tags quanto foi usada pela biblioteca react-bootstrap

*/

class Button extends React.Component {

    constructor(props){
        super(props);
        this.state  = {definition:props.definition, value: props.value};
    }

    render() {
        return (
            
            <button disabled = {this.props.disabled == true? true: false } className={classnames(getClassNames("button "+ this.state.definition,"Button"))} onClick={getClickEvent(this.props.onClick).bind(this)}>
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



Button.propTypes = {
    value: PropTypes.string,
    definition: PropTypes.string,
    onClick: PropTypes.func
};


export default Button;