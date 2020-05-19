// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassNames from '../tools/getClassName';


// Componente criado com o objetivo de servir de containe para diversos botões
// Oferece possibiidade de escolher se o container é "field" ou "buttons", para escolher field informar field={true}
// Class Field : Funcona com diversos elementos e não somente botões
// Class Buttons: Funciona apenas com botões

type Props ={
    definition?: string,
    field?: bool,
    children?:React.Node
}

const ButtonList = (props:Props) => {
    return (assembleButtonList(props));
}

function assembleButtonList(props) {
    var code_icon = "";
    var definition = getDefinition(props.definition, props.field);

    // permite o funcionamento dos addons, pois fornece uma interação que gera os filhos dentro de uma tag <p className=control>
    if (definition.includes("addons")) {
        code_icon =
            <div className={definition}>
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

function getDefinition(definition:any, field) {

    if (field == true) {
        definition = classnames(getClassNames("field " + definition, "ButtonList"));;
    } else {
        definition = classnames(getClassNames("buttons " + definition, "ButtonList"));;
    }
    return definition;
}

ButtonList.propTypes = {
    definition: PropTypes.string,
    field: PropTypes.bool
};

export default ButtonList;