import React from 'react';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList';
import Icon from '../components/Icon';
import renderer from 'react-test-renderer';
import Columns from '../components/Columns';
import Column from '../components/Column'


function onClick() {
  alert(testando);
}

test('value correctly', () => {
  const componentWithValue = renderer
    .create(<Button value="Facebook" />)
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

  const simple_color = renderer.create(<ButtonList>
    <Button>Testando</Button>
    <Button  definition="is-primary">Primary</Button>
    <Button  definition="is-link"> Link</Button>
    <Button  definition="is-info"> Info</Button>
    <Button  definition="is-success"> Success</Button>
    <Button  definition="is-warning"> Warning</Button>
    <Button  definition="is-danger"> Danger</Button>
    </ButtonList>
    ).toJSON();

  expect(simple_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores secundárias dos botões
test('color secundary correctly', () => {

  const secundary_color = renderer.create(
    <ButtonList>
    <Button  definition="is-white"> White</Button>
    <Button  definition="is-light"> Light</Button>
    <Button  definition="is-dark"> Dark</Button>
    <Button  definition="is-black"> Black</Button>
    <Button  definition="is-text"> Text</Button>
    </ButtonList>).toJSON();

  expect(secundary_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores com característica claras
test('colors light correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button  definition="is-primary is-light"> primary light</Button>
    <Button  definition="is-link is-light"> link light</Button>
    <Button  definition="is-info is-light"> info light</Button>
    <Button  definition="is-success is-light"> success light</Button>
    <Button  definition="is-warning is-light"> warning light</Button>
    <Button  definition="is-danger is-light"> danger light</Button>
    </ButtonList>).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('buttons size correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button  definition="button is-small"> Small</Button>
    <Button  > Normal</Button>
    <Button  definition="button is-medium"> Medium</Button>
    <Button  definition="button is-large"> Large</Button>
    </ButtonList>
    ).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('button list size correctly', () => {

  const small = renderer.create(
    <ButtonList definition="are-small">
<Button  > Testando</Button>
<Button  > Testando</Button>
<Button  > Testando</Button>
</ButtonList>).toJSON();
  expect(small).toMatchSnapshot();

  const medium = renderer.create(
    <ButtonList definition="are-medium">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>).toJSON();
  expect(medium).toMatchSnapshot();

  const large = renderer.create(
    <ButtonList definition="are-large">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>).toJSON();
  expect(large).toMatchSnapshot();
});

// testa se a característica fullwidth está correta
test('fullwidth  correctly', () => {

  const fullwidth = renderer.create(<Columns>
    <Column definition="is-half">
    <Button  definition="is-small is-fullwidth"> small fullwidth</Button>
    <Button  definition="is-fullwidth"> normal fullwidth</Button>
    <Button  definition="is-medium is-fullwidth"> medium fullwidth</Button>
    <Button definition="is-large is-fullwidth"> large fullwidth</Button>
    </Column>
    </Columns>
    ).toJSON();

  expect(fullwidth).toMatchSnapshot();
});

// testa se a característica outlined está correta
test('outlined  correctly', () => {
  const outlined = renderer.create(<ButtonList>
    <Button  definition="is-primary is-outlined"> primary outlined</Button>
    <Button  definition="is-link is-outlined"> link outlined</Button>
    <Button  definition="is-info is-outlined"> info outlined</Button>
    <Button  definition="is-success is-outlined"> success outlined</Button>
    <Button  definition="is-warning is-outlined"> warning outlined</Button>
    <Button  definition="is-danger is-outlined"> danger outlined</Button>
    </ButtonList>
    
    ).toJSON();

  expect(outlined).toMatchSnapshot();
});

// testa se a característica inverted está correta
test('inverted  correctly', () => {
  const inverted = renderer.create(
    
<ButtonList definition="is-primary">
<Button  definition="is-primary is-inverted"> primary inverted</Button>
<Button  definition="is-link is-inverted"> link inverted</Button>
<Button  definition="is-info is-inverted"> info inverted</Button>
<Button  definition="is-success is-inverted"> success inverted</Button>
<Button  definition="is-danger is-inverted"> danger inverted</Button>
</ButtonList>
  ).toJSON();

  expect(inverted).toMatchSnapshot();
});

// testa se a característica rounded está correta
test('rounded  correctly', () => {
  const rounded = renderer.create(
    <ButtonList>
<Button  definition="is-primary is-rounded"> primary rounded</Button>
<Button  definition="is-link is-rounded"> link rounded</Button>
<Button  definition="is-info is-rounded"> info rounded</Button>
<Button  definition="is-success is-rounded"> success rounded</Button>
<Button  definition="is-warning is-rounded"> warning rounded</Button>
<Button  definition="is-danger is-rounded"> danger rounded</Button>
</ButtonList>
    

  ).toJSON();

  expect(rounded).toMatchSnapshot();
});

// testa os estados
test('state  correctly', () => {

  const hovered = renderer.create(
    <ButtonList>
<Button  > Testando</Button>
<Button  definition="is-primary is-hovered"> Testando</Button>
<Button  definition="is-link is-hovered"> Testando</Button>
<Button  definition="is-info is-hovered"> Testando</Button>
<Button  definition="is-success is-hovered"> Testando</Button>
<Button  definition="is-warning is-hovered"> Testando</Button>
<Button  definition="is-danger is-hovered"> Testando</Button>
</ButtonList>
    
    ).toJSON();
  expect(hovered).toMatchSnapshot();

  const focused = renderer.create(<ButtonList>
    <Button  definition="is-primary is-focused"> primary focused</Button>
    <Button  definition="is-link is-focused"> link focused</Button>
    <Button  definition="is-info is-focused"> info focused</Button>
    <Button  definition="is-success is-focused"> success focused</Button>
    <Button  definition="is-warning is-focused"> warning focused</Button>
    <Button  definition="is-danger is-focused"> danger focused</Button>
    </ButtonList>).toJSON();

  expect(focused).toMatchSnapshot();

  const active = renderer.create(
    <ButtonList>
    <Button  definition="is-primary is-active"> primary active</Button>
    <Button  definition="is-link is-active"> link active</Button>
    <Button  definition="is-info is-active"> info active</Button>
    <Button  definition="is-success is-active"> success active</Button>
    <Button  definition="is-warning is-active"> warning active</Button>
    <Button  definition="is-danger is-active"> danger active</Button>
    </ButtonList>
    
    ).toJSON();

  expect(active).toMatchSnapshot();

});

test('loading corretly', () => {
  const loading = renderer.create(<ButtonList>
    <Button  definition="is-loading"> Testando</Button>
    <Button  definition="is-primary is-loading"> Testando</Button>
    <Button  definition="is-link is-loading"> Testando</Button>
    <Button  definition="is-info is-loading"> Testando</Button>
    <Button  definition="is-success is-loading"> Testando</Button>
    <Button  definition="is-warning is-loading"> Testando</Button>
    <Button  definition="is-danger is-loading"> Testando</Button>
    </ButtonList>).toJSON();

  expect(loading).toMatchSnapshot();

});

test('disabled corretly', () => {
  const disabled = renderer.create(<ButtonList>
    <Button  definition="is-primary" disabled={true} > primary disabled</Button>
    <Button  definition="is-link"  disabled={true} > link disabled</Button>
    <Button  definition="is-info" disabled={true} > info disabled</Button>
    <Button  definition="is-uccess" disabled={true} > success disabled</Button>
    <Button  definition="is-warning" disabled={true} > warning disabled</Button>
    <Button  definition="is-danger" disabled={true} > danger disabled</Button>
    </ButtonList>
    ).toJSON();

  expect(disabled).toMatchSnapshot();

});

test('buttons with icons',()=>{
  const buttons_icons = renderer.create(
    <ButtonList>
    <Button>
    <Icon icon_name="fas fa-bold"></Icon>
    </Button>
    
    <Button>
    <Icon icon_name="fas fa-italic"></Icon>
    </Button>
  
    <Button>
    <Icon icon_name="fas fa-underline"></Icon>
    </Button>
  
    <Button>
    <Icon icon_name="fab fa-github">
      Github
    </Icon>
    </Button>
    
    <Button definition="is-primary">
    <Icon icon_name="fab fa-twitter">
      Twitter
    </Icon>
    </Button>
    
    <Button definition="is-success">
    <Icon icon_name="fas fa-check">
      Save
    </Icon>
    </Button>
  
    <Button definition="is-danger is-outlined">
    <Icon icon_name="fas fa-times" icon_right={true}>
      Delete
    </Icon>
    </Button>
  
    <Button definition="is-small">
    <Icon icon_name="fab fa-github">
      Github
    </Icon>
    </Button>
  
    <Button >
    <Icon icon_name="fab fa-github">
      Github
    </Icon>
    </Button>
  
    <Button definition="is-medium">
    <Icon icon_name="fab fa-github">
      Github
    </Icon>
    </Button>
  
    <Button definition="is-large">
    <Icon icon_name="fab fa-github">
      Github
    </Icon>
    </Button>
  </ButtonList>
  
 );

 expect(buttons_icons).toMatchSnapshot();
});

