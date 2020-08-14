import React from 'react';
import Radio from '../../src/components/Radio';
import renderer from 'react-test-renderer';

var itens = [
    {value:"Yes",disabled: false, onClick:()=>{alert("Yes")}},
    {value:"No",checked: true, onClick:()=>{alert("No")}},
    {value:"Maybe",checked: true, onClick:()=>{alert("Maybe")},disabled:true }
]

test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
        <div className="container is-fluid">
        <Radio name="resposta" itens={itens}/>
    </div>

    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();


});

