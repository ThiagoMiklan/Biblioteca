import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/elements/Button.jsx';
import DropDown from './biblioteca/components/DropDown.jsx';
import './css/bulma.css';

var itens =[{"value": "teste 1",link:true},{"value":"teste 2",link:true},{"value":"teste 3", link:true}];


ReactDOM.render(
    <DropDown dropdown_name="Nome do DropDown" definition="active" itens={itens} />
    ,
    document.getElementById('root')
);

 