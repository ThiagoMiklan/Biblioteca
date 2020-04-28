import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './biblioteca/Menu.jsx';
import MenuItem from './biblioteca/MenuItem.jsx';
import 'bulma/css/bulma.css';
 

var onClickItem = ()=>{alert("Clicou")};

var itens_general = [
    {value: "General"}, {value:"Dashboard"}
]

var itens_adm = [
    {value:"Team Settings"},{value:"Manage your team",definition:"active",
    sub_itens:[{value:"Members"},{value:"Plugins"},{value:"Add a member"}]},
    {value:"Invitations"},{value:"Cloud Storage Environment Settings"},
    {value:"Authentication"}
]

var itens_tran =[
    {value: "Payments"},{value: "Transfer"},{value:"Balance"}
]

var item = {};

// para adicionar os subitens, informa o nome do iteam, o label e os itens de subitem
var itens_general_without_event = {value:"Manage your team", 
sub_itens:[{value:"Member"},{value:"Plugin"},{value:"Add a member"}]
}

var itens_administration_without_event =
 [{value:"Dashboard"}, 
 {value:"Customers",
 sub_itens:[{value:"Member"},
 {value:"Plugin"},
 {value:"Add a member"}]}];
 
var itens_merge = [{value:"item 1",sub_itens:[{value:"1"},{value:"2"}]} ,{value:"item 2",sub_itens:[{value:1},{value:2}]}]


var itens_general_with_event = 
{value:"Manage your team",onClick:onClickItem ,sub_itens:[{value:"Member", onClick:onClickItem},{value:"Plugin"},{value:"Add a member"}]}

var itens_administration_with_event =
[{value:"Dashboard",onClick:onClickItem },
 {value:"Customers",sub_itens:["Member","Plugin","Add a member"]},
];


ReactDOM.render(
      <div className="container is-fluid">
          <Menu>
                <MenuItem itens={itens_general} label="General"></MenuItem>
                <MenuItem itens={itens_adm} label="Administration"></MenuItem>
                <MenuItem itens={itens_tran} label="Transactions"></MenuItem>
          </Menu>
     </div>,
    document.getElementById('root')
);



/*
<Menu >
          <MenuItem  itens={itens_general_with_event} label="General"/>
          <MenuItem  itens={itens_administration_with_event} label ="Administration"/>
      </Menu>
      <br></br>
      <Menu >
          <MenuItem  itens={itens_general_without_event} label="General"/>
          <MenuItem  itens={itens_administration_without_event} label ="Administration"/>
      </Menu>
      <br></br>
      <Menu>
          <MenuItem label="Merge" itens={itens_merge}></MenuItem>
      </Menu>


// Observações do estado da arte
/*
Biblioteca react-bulma-components
Componente menu não possibilita a inclusão de interação sobre estrutura de dados,
observando o fato de que na maioria dos casos é interessante não escrever estaticamente
o valor de cada item, mas sim ter uma certa dinâmica ao popular os componentes, o que não se 
alcança com a biblioteca referida, sendo necessário sempre que deseja-se um valor no item
digitá-lo, tornando-o estático. Ao contrário do que foi desenvolvido no componente Menu.jsx da nossa
biblioteca, que permite o envio de um array para popular, caso queira-se montar uma tabela
a partir de dados de um banco, é plenamente possível criar um metódo que monta o dado na estrutura
exigida pelo componente.


*/

