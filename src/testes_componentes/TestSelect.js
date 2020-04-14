import React from 'react';
import ReactDOM from 'react-dom';
import Control from './biblioteca/elements/Control';
import Icon from './biblioteca/elements/Icon';
import Select from './biblioteca/form/Select';
 

var click = ()=>{
  alert("Clicou");
}

var itens_1 = [
  { value: "Select DropDown", onClick:click },
  { value: "With Options", onClick: click},
];

var itens_2 = [
  { value: "Argentina" },
  { value: "Brasil" },
  { value: "Bolivia" },
  { value: "Uruguai" },
  { value: "Paraguai" },
]

ReactDOM.render(
  <>
    <div className="field">
      <Select  onChange={onClick} definition="rounded" itens={itens_1}></Select>
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
      <Select definition="large focused" itens={itens_1}></Select>
      <Icon  definition="small left" icon_name="fas fa-globe"></Icon>
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