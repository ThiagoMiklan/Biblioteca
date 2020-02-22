import React from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import BreadCrumb from './biblioteca/components/BreadCrumb';

/*
Caso queira informar vários itens passar um array de itens
Caso não queira passar definição, apenas não informar "definition no corpo do componente"
Caso queira passar um único item, apenas passar um objeto
Assim como se passa os objetos nos itens, pode-se passar individualmente no props "itens"
*/

var itens = [
            {value: "Bulma",link:"https://bulma.io/", definition: "active"}, {value:"Documentation"}, {value:"Componentes"},{value: "BreadCrumb" ,definition:"active"}
];

ReactDOM.render( 
<div className ="container is-fluid">
    <BreadCrumb  itens = {{value:"Componentes", }}/>
</div>,
    document.getElementById('root')
);
