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

