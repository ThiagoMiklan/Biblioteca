import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel';
import Column from './components/Column';
import Columns from './components/Columns';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import CheckBox from './components/CheckBox';


var onChange = () => {
  alert("Changed");
}

var itens_tabs = [
  { value: "All", href: "www.facebook.com", onClick: () => { alert("clicked All") }, icon_definition: "is-warning", icon_name: "fas fa-home" },
  { value: "Public", href: "www.facebook.com", onClick: () => { alert("clicked Public") }, icon_definition: "is-danger", icon_name: "far fa-user" },
  { value: "Private", href: "www.facebook.com", onClick: () => { alert("clicked Private") }, icon_name: "fas fa-users" },
  { value: "Sources", href: "www.facebook.com", onClick: () => { alert("clicked Sourcers") }, icon_definition: "is-success", icon_name: "fas fa-hand-holding-usd" },
  { value: "Forks", href: "www.facebook.com", onClick: () => { alert("clicked Forks") }, icon_definition: "is-success", icon_name: "fas fa-hand-holding-usd" }
]


var itens_blocks = [
  { value: "Bulma", href: "www.facebook.com", onClick: () => { alert("clicked Bulma") }, icon_definition: "has-text-warning", icon_name: "fab fa-css3-alt" },
  { value: "Github", href: "www.facebook.com", onClick: () => { alert("clicked Github") }, icon_name: "fab fa-github" },
  { value: "Twitter", href: "www.facebook.com", onClick: () => { alert("clicked Twitter") }, icon_definition: "has-text-info", icon_name: "fab fa-twitter" },
  { value: "Facebook", href: "www.facebook.com", onClick: () => { alert("clicked Facebooks") }, icon_definition: "has-text-info", icon_name: "fab fa-facebook" },
  { value: <CheckBox onClick={() => { alert("Clicked checkbox") }}>remember me</CheckBox> }
  ,
  { value: <Button definition="is-primary light fullwidth" onClick={() => { alert("Clicou no botao") }}> Reset All</Button> }
]

ReactDOM.render(
  <Columns>
    <Column definition="is-two-fifths">
      <div className="container is-fluid">
        <Panel header="Repositories"
          itens_tabs={itens_tabs}
          itens_blocks={itens_blocks}
          search_placeholder="Search"
          search_icon_definition="info">
        </Panel>
        <Panel header="Primary" definition="is-primary" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        <Panel header="Link" definition="is-link" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        <Panel header="Info" definition="is-info" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        <Panel header="Success" definition="is-success" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        <Panel header="Warning" definition="is-warning" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        <Panel header="Danger" definition="is-danger" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
      </div>
    </Column>
  </Columns>
  , document.getElementById('root'));
