import React from 'react'
import classnames from 'classnames';
import getClassNames from '../tools/getClassName';
import PropTypes from 'prop-types';
import '../css/all';


// Provisório
const Icon = (props) => {
    var definition =  classnames(getClassNames("icon "+props.definition, "Icon"));
    return (
        <>  
            {(props.icon_right == false || props.icon_right == undefined) && <span>{props.children}</span>}
            <span onClick={props.onClick} className={definition}>
                <i className={props.icon_name} aria-hidden="true" ></i>
            </span>
            {props.icon_right == true && <span>{props.children}</span>}
            
        </>
    );
}

Icon.propTypes = {
    //Características do Bulma
    definition: PropTypes.string,
    // diz se o icon está a direita ou a esquerda
    // Utilizável em alguns componentes que o Icon funciona como children
    // Exemplo: Button permite interligação com Icon
    icon_rigth: PropTypes.string,
    // Nome do ícone
    icon_name: PropTypes.string
}



export default Icon;