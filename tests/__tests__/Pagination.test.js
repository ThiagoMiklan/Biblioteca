import React from 'react';
import Pagination from '../../src/components/Pagination';
import renderer from 'react-test-renderer';
import Columns from '../../src/components/Columns';
import Column from '../../src/components/Column';

var onClickItem = () => {
  alert("Clicked");
}

var itens = [
  { value: 1, href: "https://pt-br.reactjs.org/docs/hooks-overview.html", definition: "is-current", onClick: onClickItem },
  { value: 2, href: "https://pt-br.reactjs.org/docs/hooks-effect.html"},
  { value: 3, href: "https://pt-br.reactjs.org/docs/hooks-effect.html"}
]

test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
      <Columns>
      <Column definition="is-half">
        <div className="container is-fluid"> 
        <br></br>
        <Pagination itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        <Pagination itens={itens} next_name="Next" previous_name="Previous" previous_disabled={true}></Pagination>
        <Pagination itens={itens} next_name="Next" previous_name="Previous" previous_disabled={true} next_disabled={true}></Pagination>
        <Pagination definition="is-center" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        <Pagination definition="is-right" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        <Pagination definition="is-right is-rounded" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        
        <Pagination definition="is-right is-small" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        <Pagination definition="is-right is-medium" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        <Pagination definition="is-right is-large" itens={itens} next_name="Next" previous_name="Previous"></Pagination>
        </div>
      </Column>
  
    </Columns>

    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();



});





