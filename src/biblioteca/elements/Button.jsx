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
        this.state  = {definition:props.definition};
    }

    render() {
        var definition = getDefinition(this.props.delete, this.state.definition);

        return (
            <button disabled = {this.props.disabled == true? true: false } className={definition} onClick={getClickEvent(this.props.onClick).bind(this)}>
                {this.props.children}
         </button>
         );
    }
}

/* Método usado para pegar a definição do componente caso ele seja do tipo delete,
   pois caso seja a definição é apenas de "delete", não envolvendo outras classes Bulma
*/
function getDefinition(isDelete,definition){
    if(isDelete){
       return "delete";
    }else{
        return classnames(getClassNames("button "+ definition,"Button"));
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
    // definição CSS Bulma
    definition: PropTypes.string,
    // Método Onclick disponível
    onClick: PropTypes.func,
    // Caso exista um ícone, informar através da prop icon, passando o componente Icon
    icon: PropTypes.element,
    // Caso o botão seja do tipo delete
    delete: PropTypes.bool
};


export default Button;