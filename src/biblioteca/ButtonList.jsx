// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

// Componente criado com o objetivo de servir de containe para diversos botões
// Oferece possibiidade de escolher se o container é "field" ou "buttons", para escolher field informar field={true}
// Class Field : Funcona com diversos elementos e não somente botões
// Class Buttons: Funciona apenas com botões

type Props ={
    definition: string,
    field?: bool,
    children?:React.Node
}

const ButtonList = (props:Props) => {
return assembleButtonList(props);
}

function assembleButtonList(props) {
    var code_icon = "";
    var definition = (props.definition ==  undefined)? "buttons": "buttons "+props.definition;
    
        if (definition.includes("addons")) {
        code_icon =
            <div className={props.definition}>
                {
                    React.Children.map(props.children, (child, i) => {
                        return <p className="control">
                            <div className={definition}>
                                {child}
                            </div>
                        </p>
                    })
                }
             </div>

    } else {
        code_icon =
            <div className={definition}>
                {props.children}
            </div>;
    }

    
    
    return code_icon;
}

ButtonList.propTypes = {
    definition: PropTypes.string,
    field: PropTypes.bool
};

export default ButtonList;