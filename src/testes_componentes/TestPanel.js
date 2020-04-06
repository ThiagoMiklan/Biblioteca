import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './biblioteca/Panel';
import Column from './biblioteca/Column';
import Columns from './biblioteca/Columns';
import './css/bulma.css';
import Button from './biblioteca/Button';



var itens_tabs = [
    { value: "All", href: "www.facebook.com", onClick: () => { alert("Home")}, icon_definition:"warning", icon_name:"fas fa-home"},
    { value: "Public", href: "www.facebook.com", onClick: () => { alert("Clientes") }, icon_definition:"danger",icon_name:"far fa-user" },
    { value: "Private", href: "www.facebook.com", onClick: () => { alert("Usuários") } ,icon_name: "fas fa-users"}, 
    { value: "Sources", href: "www.facebook.com", onClick: () => { alert("Pedidos") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"},
    { value: "Forks", href: "www.facebook.com", onClick: () => { alert("Pedidos") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"}
]


var itens_blocks = [
  { value: "Bulma", href: "www.facebook.com", onClick: () => { alert("clicou Bulma")}, icon_definition:"warning", icon_name:"fab fa-css3-alt"},
  { value: "Github", href: "www.facebook.com", onClick: () => { alert("clicou github") }, icon_definition:"danger",icon_name:"fab fa-github" },
  { value: "Twitter", href: "www.facebook.com", onClick: () => { alert("clicou Usuario") } ,icon_name: "fab fa-twitter"}, 
  { value: "Facebook", href: "www.facebook.com", onClick: () => { alert("clicou Pedido") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"},
  { value: <Button definition="primary light fullwidth" onClick={()=>{alert("Clicou no botao")}}> Reset All</Button>}
]

ReactDOM.render(
  <Columns>
    <Column definition="half">
      <Panel header="Find" definition ="primary" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
    </Column>
 </Columns>
    , document.getElementById('root'));
