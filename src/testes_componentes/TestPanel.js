import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './biblioteca/Panel';
import Column from './biblioteca/Column';
import Columns from './biblioteca/Columns';
import './css/bulma.css';
import Button from './biblioteca/Button';
import CheckBox from './biblioteca/CheckBox';



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
  { value: "Twitter", href: "www.facebook.com", onClick: () => { alert("clicou twitter") } ,icon_name: "fab fa-twitter"}, 
  { value: "Facebook", href: "www.facebook.com", onClick: () => { alert("clicou dinheiro") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"},
  { value: <CheckBox onClick={()=>{alert("Clicou checkbox")}}>remember me</CheckBox>}
  ,
  { value: <Button definition="primary light fullwidth" onClick={()=>{alert("Clicou no botao")}}> Reset All</Button>}
]

ReactDOM.render(
  <Columns>
    <Column definition="half">
      <Panel header="Primary" definition ="primary" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      <Panel header="Link" definition ="link" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      <Panel header="Info" definition ="info" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      <Panel header="Success" definition ="success" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      <Panel header="Warning" definition ="warning" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      <Panel header="Danger" definition ="danger" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
    </Column>
 </Columns>
    , document.getElementById('root'));
