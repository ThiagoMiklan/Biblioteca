// @flow
import * as React from 'react';
import FieldContent from '../biblioteca/FieldContent';
import Button from '../biblioteca/Button';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';

// FieldButton oferece um botão entre duas divs que são
// className ="field" e className="control"

// Vantagem em relação a Button, um pequeno espaçamento entre o elemento
// FieldButton e seus elementos superior, além de ser alocado abaixo do elemento
// e não ao lado, como é o caso de button

// Para ver a diferença entre FieldButton e Button, basta alocar dois buttons em sequencia
// e um button e um fieldbutton, que será possível ver uma diferença de espaçamento

type Props ={
    field_definition?: string,
    label?:string,
    button_definition?: string,
    onClick?: ()=> void,
    disabled?: bool,
    value?: React.Node
}

const FieldButton = (props:Props) => {
  var field_definition =  classnames(getClassName(props.field_definition,"Field"));
    return <FieldContent definition={field_definition} label={props.label}>
        <Button definition={props.button_definition}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.value}
        </Button>
    </FieldContent>
}

FieldButton.propTypes ={
    button_definition: PropTypes.string,
    label: PropTypes.string,
    field_definition: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    value: PropTypes.string
}

export default FieldButton;