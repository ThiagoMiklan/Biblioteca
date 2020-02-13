import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './biblioteca/components/Menu.jsx';
import MenuItem from './biblioteca/components/MenuItem.jsx';
import './css/bulma.css';
// informa objetos com label que o título de uma série de itens e um array com os nomes dos itens
var menu_itens= [{label:"General",itens:["DashBoard","Customers"], definition: "active"},
                 {label:"Administration",itens:["Team Settings","Manage your Team"]}
                ];
                
// para adicionar os subitens, informa o nome do iteam, o label e os itens de subitem

var x = {item:"Manage your team", sub_itens:["Member","Plugin","Add a member"]}
var y = [{item:"Dashboard"}, {item:"Customers",sub_itens:["Member","Plugin","Add a member"]}];

ReactDOM.render(
      <div className="container is-fluid">
      <Menu >
          <MenuItem  item={x} label="General"/>
          <MenuItem  item={y} label ="Administration"/>
      </Menu>
      </div>,
    document.getElementById('root')
);

        