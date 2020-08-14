

/*

import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import DropDown from './components/DropDown';
import 'bulma/css/bulma.css'


 ReactDOM.render(
        <>
        <div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Other dropdown item
      </a>
      <a href="#" class="dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" class="dropdown-item">
        Other dropdown item
      </a>
      <hr class="dropdown-divider"/>
      <a href="#" class="dropdown-item">
        With a divider
      </a>
    </div>
  </div>
</div>
        </>
     ,
     document.getElementById('root')
 );

*/


/*

import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import DropDown from './components/DropDown';
import 'bulma/css/bulma.css'


var itens_link =[{value: "Dropdown Button" ,link:true, href:"https://ufsc.br", onClick:()=>{alert("Clicou")}},
            {value: "Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "Active Dropdown Item", link:true , definition:"is-active", href:"https://ufsc.br"},
            {value: "Other Dropdown Item",link:true, href:"https://ufsc.br"},
            {value: "With a divider",link:true, href:"https://ufsc.br"}
            ];


 ReactDOM.render(
        <>
          <DropDown definition="is-active" itens={itens_link}/>    
        </>
     ,
     document.getElementById('root')
 );

*/