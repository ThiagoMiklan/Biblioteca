import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/elements/Button.jsx';
import DropDown from './biblioteca/components/DropDown.jsx';
import './css/bulma.css';

var itens =[{"value": "Estrela",link:true, href:"http://www.insulartc.com.br/estrela/","definition": "active"},
            {"value":"Insular",link:true},{"value":"teste 3", link:true, "definition": "active"}];


ReactDOM.render(
    <DropDown dropdown_name="Nome do DropDown" definition="active right" itens={itens} />,
    document.getElementById('root')
);

 