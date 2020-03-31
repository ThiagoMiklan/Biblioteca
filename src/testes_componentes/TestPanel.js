
import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './biblioteca/components/Panel';
import Column from './biblioteca/columns/Column';
import Columns from './biblioteca/columns/Columns';
import Icon from './biblioteca/elements/Icon';
import './css/bulma.css';
import PanelItem from './biblioteca/components/PanelItem';
import Button from './biblioteca/elements/Button';
import Field from './biblioteca/elements/Field';


var itens = [
    { value: "All", href: "www.facebook.com", onClick: () => { alert("Home")}, icon_definition:"warning", icon_name:"fas fa-home"},
    { value: "Public", href: "www.facebook.com", onClick: () => { alert("Clientes") }, icon_definition:"danger",icon_name:"far fa-user" },
    { value: "Private", href: "www.facebook.com", onClick: () => { alert("Usuários") } ,icon_name: "fas fa-users"}, 
    { value: "Sources", href: "www.facebook.com", onClick: () => { alert("Pedidos") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"},
    { value: "Forks", href: "www.facebook.com", onClick: () => { alert("Pedidos") } ,icon_definition:"success" ,icon_name:"fas fa-hand-holding-usd"}
]

var PanelTeste =  (props) => <Columns>
<Column definition="one-third">
<Panel definition={props.definition}header="Repositório" itens_tabs={itens}>
<Field placeholder="Search" type="text" control_definition="icons-left" icon_name="fas fa-search"/>
    <PanelItem>
        <Icon icon_name="fas fa-book" definition="info"></Icon>
        Bulma
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-book" definition="info"></Icon>
        Marksheet
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-book" definition="info"></Icon>
        mireset.css
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-code-branch" definition="info"></Icon>
        jgthms.github.io
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-code-branch" definition="info"></Icon>
        jgthms.github.io
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-code-branch" definition="info"></Icon>
        mojs
    </PanelItem>
    <PanelItem>
        <Icon icon_name="fas fa-book" definition="info"></Icon>
        remember me
    </PanelItem>
    <PanelItem>
       <Button definition="link outlined fullwidth">
       Reset all filters
       </Button>
    </PanelItem>
    
</Panel>
</Column>
</Columns>


ReactDOM.render(
   <>
    <PanelTeste/>
    
    <PanelTeste definition="primary"/>
    <PanelTeste definition="link"/>
    <PanelTeste definition="info"/>
    <PanelTeste definition="success"/>
    <PanelTeste definition="warning"/>
    <PanelTeste definition="danger"/>
    </>
    , document.getElementById('root'));