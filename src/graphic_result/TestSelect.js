import React from 'react';
import ReactDOM from 'react-dom';
import Control from './components/Control';
import Icon from './components/Icon';
import Select from './components/Select';
import 'bulma/css/bulma.css';
 

const click = ()=>{
  alert("Clicou");
}

const itens_1 = [
  { value: "Select DropDown", onClick:click },
  { value: "With Options", onClick: click},
];

const itens_2 = [
  { value: "Argentina" },
  { value: "Brasil" },
  { value: "Bolivia" },
  { value: "Uruguai" },
  { value: "Paraguai" },
]

ReactDOM.render(
  <>
    <div className="field">
      <Select  onChange={click} definition="is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-primary is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-info is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-success is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-warning is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-danger is-rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-small" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-medium" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-large" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-primary" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-primary is-hovered" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-focused" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="is-loading" itens={itens_1}></Select>
    </div>
    
    <Select definition="is-multiple" itens={itens_1} multiple_size={8}></Select>

    <Control definition="has-icons-left">
      <Select definition="is-small" itens={itens_1}></Select>
      <Icon  definition="is-small is-left" icon_name="fas fa-globe"></Icon>
    </Control>

    <Control definition="has-icons-left">
      <Select definition="is-medium" itens={itens_1}></Select>
      <Icon  definition="is-small is-left" icon_name="fas fa-globe"></Icon>
    </Control>

    <Control definition="has-icons-left">
      <Select definition="is-large is-focused" itens={itens_1}></Select>
      <Icon  definition="is-small is-left" icon_name="fas fa-globe"></Icon>
    </Control>


  </>
  , document.getElementById("root"))

/*
 <div className="field">
      <Select definition="rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="primary rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="info rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="success rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="warning rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="danger rounded" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="small" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="medium" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="large" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="primary" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="primary hovered" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="focused" itens={itens_1}></Select>
    </div>

    <div className="field">
      <Select definition="loading" itens={itens_1}></Select>
    </div>
    
    <Select definition="multiple" itens={itens_1} multiple_size="8"></Select>

    <Control>
      <Select definition="small" itens={itens_1}></Select>
      <Icon  definition="small left" icon_name="fas fa-globe"></Icon>
    </Control>

    <Control>
      <Select definition="medium" itens={itens_1}></Select>
      <Icon  definition="small left" icon_name="fas fa-globe"></Icon>
    </Control>

    <Control>
      <Select definition="large" itens={itens_1}></Select>
      <Icon  definition="small left" icon_name="fas fa-globe"></Icon>
    </Control>

*/