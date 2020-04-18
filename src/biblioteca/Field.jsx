import React from 'react';
import PropTypes from 'prop-types'
import Icon from './Icon';
import Control from './Control';
import Input from './Input';

// O presente componente foi criado como maneira de facilitar
// o uso do componente Input,Control,Label e Icon,
// Buscando fornecer um componente visual que mostra um campo de texto
// comum, com um rótulo e um espaço para digitação, mesclando os quatro componentes
// antes citado
// Obs: Principal motivação, o excesso de código, assim como sua repetição
// Eventos : onChange do componente Input

// Para fim  de organização. Considera-se esse um componente misto.

const Field = (props) => {

    return <>
        <label className="label">{props.label}</label>
        <Control definition={props.control_definition}>
            <Input definition={props.input_definition} onChangeEvent={props.onChange} placeholder={props.placeholder} type={props.type} value={props.value}></Input>
            <Icon definition={props.icon_definition} icon_name={props.icon_name}></Icon>
        </Control>
        </>

}


Field.propTypes = {
    /*
    Nome do rótulo que irá aparecer sobre o 
    input
    */
    label: PropTypes.string,
    /*
    definition do componente control,
    qual característica pré-defininada do 
    componente, é desejada que apareça no 
    componente Field.
    */
    control_definition: PropTypes.string,
    /*
    definition do componente input,
    qual característica pré-defininada do 
    componente, é desejada que apareça no 
    componente Field.
    */
    input_definition: PropTypes.string,
    /*
    definition do componente control,
    qual característica pré-defininada do 
    componente, é desejada que apareça no 
    componente Field.
    Essa propriedade é importante pois
    caso deseje-se colocar o icon no lado 
    direito e/ou esquerdo, deve se utilizar essa propriedade
    e informar "right" ou "left"
    */
    icon_definition: PropTypes.string,
    /*
    Referente ao nome do ícone segundo
    o Font Awesome
    */
    icon_name: PropTypes.string,
    /*
    Função onChange do componente Input
    */
    onChange: PropTypes.func,
    // Placeholder Input
    placeholder: PropTypes.string,
    // Type Input
    type: PropTypes.string,
    // Valor opcional de valor do input do field
    value: PropTypes.string
}


export default Field;