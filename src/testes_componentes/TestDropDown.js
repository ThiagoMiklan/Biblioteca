import React from 'react';
import ReactDOM from 'react-dom';
import DropDown from './biblioteca/DropDown';
import Columns from './biblioteca/Columns';
import Column from './biblioteca/Column';
import {renderToString} from 'react-dom/server';
import './css/bulma.css';


var itens_link =[{value: "Dropdown Button" ,link:true, href:"https://ufsc.br", onClick:()=>{alert("Clicou")}},
            {value: "Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Active Dropdown Item", link:true , definition:"active", href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "With a divider",link:true, href:"https://ufsc.br"}
            ];

var itens_div =[
{value: <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>, onClick:()=>{alert("Clicou")}},
{value: <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>},
{value: "This is a link", link:true}

];

var code = renderToString(<DropDown dropdown_name="teste" definition="right" itens={itens_div} />);
var y  =0;

 ReactDOM.render(
        <>
          <DropDown definition="active" itens={itens_link}/>    
          <DropDown definition="active right" itens={itens_div}/>
        </>
     ,
     document.getElementById('root')
 );
