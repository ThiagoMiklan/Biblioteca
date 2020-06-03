import React from 'react';
import Icon from '../components/Icon';
import Select from '../components/Select';
import Control from '../components/Control';
import renderer from 'react-test-renderer';


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
  

test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
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
        
        <Select definition="is-multiple" itens={itens_1} multiple_size="8"></Select>
    
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
        
    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();



});

