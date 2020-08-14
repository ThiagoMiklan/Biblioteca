import React from 'react';
import Button from '../../src/components/Button';
import ButtonList from '../../src/components/ButtonList';
import Icon from '../../src/components/Icon';
import renderer from 'react-test-renderer';
import Columns from '../../src/components/Columns';
import Column from '../../src/components/Column'


function onClick() {
  alert(testando);
}

test('value correctly', () => {
  const componentWithValue = renderer
    .create(<Button label="Value"/>)
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();

  // componente sem valor
  const componentWithoutValue = renderer.create(<Button />)
    .toJSON();
  expect(componentWithoutValue).toMatchSnapshot();

});

// testa se as cores estão corretas, cores simples sem características adicionais
test('color correctly', () => {

  const simple_color = renderer.create(
  <ButtonList>
      <Button  definition="is-primary" label="Primary"/>
      <Button  definition="is-link" label="Link"/>
      <Button  definition="is-info" label="Info"/>
      <Button  definition="is-success" label="Success"/>
      <Button  definition="is-warning" label="Warning"/>
      <Button  definition="is-danger" label="Danger"/>
  </ButtonList>
    ).toJSON();

  expect(simple_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores secundárias dos botões
test('color secundary correctly', () => {

  const secundary_color = renderer.create(
    <ButtonList>
      <Button  definition="is-white" label="White"/>
      <Button  definition="is-light" label="Light"/>
      <Button  definition="is-dark" label="Dark"/>
      <Button  definition="is-black" label="Black"/>
      <Button  definition="is-text" label="Text"/>
  </ButtonList>).toJSON();

  expect(secundary_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores com característica claras
test('colors light correctly', () => {

  const light_color = renderer.create(
  <ButtonList>
    <Button  definition="is-primary is-light" label="primary light"/>
    <Button  definition="is-link is-light" label="link light"/>
    <Button  definition="is-info is-light" label="info light"/>
    <Button  definition="is-success is-light" label="success light"/>
    <Button  definition="is-warning is-light" label="warning light"/>
    <Button  definition="is-danger is-light" label="danger light"/>
  </ButtonList>).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('buttons size correctly', () => {

  const light_color = renderer.create(
  <ButtonList>
    <Button definition="button is-small" label="Small"/>
    <Button label="Normal"/>
    <Button definition="button is-medium" label="Medium"/>
    <Button definition="button is-large" label="Large"/>
  </ButtonList>
    ).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('button list size correctly', () => {

  const small = renderer.create(
    <ButtonList definition="are-small">
      <Button label="Small"/>
      <Button label="Small"/> 
      <Button label="Small"/>
    </ButtonList>).toJSON();
  expect(small).toMatchSnapshot();

  const medium = renderer.create(
    <ButtonList definition="are-medium">
      <Button label="Medium"/> 
      <Button label="Medium"/> 
      <Button label="Medium"/> 
    </ButtonList>).toJSON();
  expect(medium).toMatchSnapshot();

  const large = renderer.create(
    <ButtonList definition="are-large">
      <Button label="Large"/> 
      <Button label="Large"/> 
      <Button label="Large"/> 
    </ButtonList>
).toJSON();
  expect(large).toMatchSnapshot();
});

// testa se a característica fullwidth está correta
test('fullwidth  correctly', () => {

  const fullwidth = renderer.create(
    <>
    <Button  definition="is-small is-fullwidth" label="small fullwidt"/>
    <Button  definition="is-fullwidth" label="normal fullwidth"/>
    <Button  definition="is-medium is-fullwidth" label="medium fullwidth"/>
    <Button definition="is-large is-fullwidth" label="large fullwidth"/>
    </>
    ).toJSON();

  expect(fullwidth).toMatchSnapshot();
});

// testa se a característica outlined está correta
test('outlined  correctly', () => {
  const outlined = renderer.create(
    <ButtonList>
      <Button  definition="is-primary is-outlined" label="primary outlined"/>
      <Button  definition="is-link is-outlined" label=" link outlined"/>
      <Button  definition="is-info is-outlined" label="info outlined"/>
      <Button  definition="is-success is-outlined" label="success outlined"/> 
      <Button  definition="is-warning is-outlined" label="warning outlined"/>
      <Button  definition="is-danger is-outlined" label="danger outlined"/>
    </ButtonList>
    ).toJSON();

  expect(outlined).toMatchSnapshot();
});

// testa se a característica inverted está correta
test('inverted  correctly', () => {
  const inverted = renderer.create(
    <ButtonList definition="is-primary">
      <Button  definition="is-primary is-inverted" label="primary inverted"/> 
      <Button  definition="is-link is-inverted" label="link inverted"/>
      <Button  definition="is-info is-inverted" label="info inverted"/>
      <Button  definition="is-success is-inverted" label="success inverted"/> 
      <Button  definition="is-danger is-inverted" label="danger inverted"/> 
    </ButtonList>
  ).toJSON();

  expect(inverted).toMatchSnapshot();
});

// testa se a característica rounded está correta
test('rounded  correctly', () => {
  const rounded = renderer.create(
    <ButtonList>
      <Button  definition="is-primary is-rounded" label="primary rounded"/> 
      <Button  definition="is-link is-rounded" label="link rounded"/>
      <Button  definition="is-info is-rounded" label=" info rounded"/>
      <Button  definition="is-success is-rounded" label="success rounded"/>
      <Button  definition="is-warning is-rounded" label="warning rounded"/>
      <Button  definition="is-danger is-rounded" label="danger rounded"/>
    </ButtonList>
  ).toJSON();

  expect(rounded).toMatchSnapshot();
});

// testa os estados
test('state  correctly', () => {

  const hovered = renderer.create(
  <ButtonList>
    <Button  > Testando</Button>
    <Button  definition="is-primary is-hovered" label="Testando"/>
    <Button  definition="is-link is-hovered" label="Testando"/> 
    <Button  definition="is-info is-hovered" label="Testando"/> 
    <Button  definition="is-success is-hovered" label="Testando"/>
    <Button  definition="is-warning is-hovered" label="Testando"/>
    <Button  definition="is-danger is-hovered" label="Testando"/>
  </ButtonList>
    ).toJSON();
  expect(hovered).toMatchSnapshot();

  const focused = renderer.create(
  <ButtonList>
    <Button  definition="is-primary is-focused" label="primary focused"/>
    <Button  definition="is-link is-focused" label="link focused"/> 
    <Button  definition="is-info is-focused" label="info focused"/>
    <Button  definition="is-success is-focused" label="success focused"/> 
    <Button  definition="is-warning is-focused" label="warning focused"/>
    <Button  definition="is-danger is-focused" label="danger focused"/> 
  </ButtonList>).toJSON();

  expect(focused).toMatchSnapshot();

  const active = renderer.create(
    <ButtonList>
      <Button  definition="is-primary is-active" label="primary active"/> 
      <Button  definition="is-link is-active" label="link active"/>
      <Button  definition="is-info is-active" label="info active"/>
      <Button  definition="is-success is-active" label="success active"/> 
      <Button  definition="is-warning is-active" label="warning active"/> 
      <Button  definition="is-danger is-active" label="danger active"/> 
    </ButtonList>
    ).toJSON();

  expect(active).toMatchSnapshot();

});

test('loading corretly', () => {
  const loading = renderer.create(
    <ButtonList>
      <Button  definition="is-loading" label="loading"/> 
      <Button  definition="is-primary is-loading" label="loading"/>
      <Button  definition="is-link is-loading" label="loading"/>
      <Button  definition="is-info is-loading" label="loading"/>
      <Button  definition="is-success is-loading" label="loading"/>
      <Button  definition="is-warning is-loading" label="loading"/> 
      <Button  definition="is-danger is-loading" label="loading"/>
    </ButtonList>
).toJSON();

  expect(loading).toMatchSnapshot();

});

test('disabled corretly', () => {
  const disabled = renderer.create(
    <ButtonList>
      <Button  definition="is-primary" disabled={true} label="primary disabled"/> 
      <Button  definition="is-link"  disabled={true} label="link disabled"/> 
      <Button  definition="is-info" disabled={true} label="info disabled"/>
      <Button  definition="is-uccess" disabled={true} label="success disabled"/> 
      <Button  definition="is-warning" disabled={true} label="warning disabled"/>
      <Button  definition="is-danger" disabled={true} label="danger disabled"/>
    </ButtonList>
    ).toJSON();

  expect(disabled).toMatchSnapshot();

});

test('buttons with icons',()=>{
  const buttons_icons = renderer.create(
    <ButtonList>
    <Button label={<Icon icon_name="fas fa-bold"/>}/>
    
    <Button label={<Icon icon_name="fas fa-italic"/>}/>
  
    <Button label={<Icon icon_name="fas fa-underline"/>}/>
  
    <Button label={<Icon icon_name="fab fa-github">Github</Icon>}/>

    <Button definition="is-primary" label={<Icon icon_name="fab fa-twitter">Twitter</Icon>}/>
    
    <Button definition="is-success" label={<Icon icon_name="fas fa-check">Save</Icon>}/> 
  
    <Button definition="is-danger is-outlined" label={<Icon icon_name="fas fa-times" icon_right={true}>
      Delete
    </Icon>}/>

  
    <Button definition="is-small" label={<Icon icon_name="fab fa-github">
      Github
    </Icon>}/>
  
    <Button label={<Icon icon_name="fab fa-github">
      Github
    </Icon>}/>
    
  
    <Button definition="is-medium" label={<Icon icon_name="fab fa-github">
      Github
    </Icon>}/>
  
    <Button definition="is-large" label={<Icon icon_name="fab fa-github"> Github</Icon>}/>

    </ButtonList>
  
 );

 expect(buttons_icons).toMatchSnapshot();
});

