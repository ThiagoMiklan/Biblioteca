import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/elements/Button.jsx';
import Menu from './biblioteca/components/Menu.jsx';
import MenuLabel from './biblioteca/components/MenuLabel.jsx';
import MenuItem from './biblioteca/components/MenuItem.jsx';
import './css/bulma.css';
// informa objetos com label que o título de uma série de itens e um array com os nomes dos itens
var menu_itens= [{label:"General",itens:["DashBoard","Customers"], definition: "active"},
                 {label:"Administration",itens:["Team Settings","Manage your Team"]}
                ];
                
// para adicionar os subitens, informa o nome do iteam, o label e os itens de subitem
var sub_menu_itens = [{label:"Administrtion",item:"Manage your Team",sub_itens:["Members","Plugin","Add a member"]}]
var menu_item ={};

var x = <MenuItem  item={"Team Settings"} />;
var y = <MenuItem  item={"Manage your team"} sub_itens={["Member","Plugin","Add a member"]}/>;

ReactDOM.render(
      <div className="container is-fluid">
        <Menu menu_itens={menu_itens} sub_itens={sub_menu_itens}>
            <MenuLabel label="Administration"/>
                <MenuItem  item={"Manage your team"} sub_itens={["Member","Plugin","Add a member"]}/>
            <MenuLabel label="General"/>
                <MenuItem  item={"DashBoard"} />
                <MenuItem  item={"Customers"} />
        </Menu>
        </div>  ,
    document.getElementById('root')
);

 