import React from 'react';
import Button from '../biblioteca/Button';
import ButtonList from '../biblioteca/ButtonList';
import Icon from '../biblioteca/Icon';
import renderer from 'react-test-renderer';


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
    <Button  definition="primary">Testando</Button>
    <Button  definition="link"> Testando</Button>
    <Button  definition="info"> Testando</Button>
    <Button  definition="success"> Testando</Button>
    <Button  definition="warning"> Testando</Button>
    <Button  definition="danger"> Testando</Button>
    </ButtonList>
    ).toJSON();

  expect(simple_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores secundárias dos botões
test('color secundary correctly', () => {

  const secundary_color = renderer.create(
    <ButtonList>
    <Button  definition="white"> Testando</Button>
    <Button  definition="light"> Testando</Button>
    <Button  definition="dark"> Testando</Button>
    <Button  definition="black"> Testando</Button>
    <Button  definition="text"> Testando</Button>
    </ButtonList>).toJSON();

  expect(secundary_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores com característica claras
test('colors light correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button  definition="primary light"> Testando</Button>
    <Button  definition="link light"> Testando</Button>
    <Button  definition="info light"> Testando</Button>
    <Button  definition="success light"> Testando</Button>
    <Button  definition="warning light"> Testando</Button>
    <Button  definition="danger light"> Testando</Button>
    
    </ButtonList>).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('buttons size correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button  definition="button small"> Testando</Button>
    <Button  > Testando</Button>
    <Button  definition="button normal"> Testando</Button>
    <Button  definition="button medium"> Testando</Button>
    <Button  definition="button large"> Testando</Button>
    </ButtonList>
    ).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('button list size correctly', () => {

  const small = renderer.create(
    <ButtonList definition="small">
<Button  > Testando</Button>
<Button  > Testando</Button>
<Button  > Testando</Button>
</ButtonList>).toJSON();
  expect(small).toMatchSnapshot();

  const medium = renderer.create(
    <ButtonList definition="medium">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>).toJSON();
  expect(medium).toMatchSnapshot();

  const large = renderer.create(
    <ButtonList definition="large">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>).toJSON();
  expect(large).toMatchSnapshot();
});

// testa se a característica fullwidth está correta
test('fullwidth  correctly', () => {

  const fullwidth = renderer.create(<ButtonList>
    <Button  definition="small fullwidth"> Testando</Button>
    <Button  definition="fullwidth"> Testando</Button>
    <Button  definition="medium fullwidth"> Testando</Button>
    <Button definition="large fullwidth"> Testando</Button>
    </ButtonList>
    ).toJSON();

  expect(fullwidth).toMatchSnapshot();
});

// testa se a característica outlined está correta
test('outlined  correctly', () => {
  const outlined = renderer.create(<ButtonList>
    <Button  definition="primary outlined"> Testando</Button>
    <Button  definition="link outlined"> Testando</Button>
    <Button  definition="info outlined"> Testando</Button>
    <Button  definition="success outlined"> Testando</Button>
    <Button  definition="warning outlined"> Testando</Button>
    <Button  definition="danger outlined"> Testando</Button>
    </ButtonList>
    ).toJSON();

  expect(outlined).toMatchSnapshot();
});

// testa se a característica inverted está correta
test('inverted  correctly', () => {
  const inverted = renderer.create(
    <ButtonList definition="primary">
<Button  definition="primary inverted"> Testando</Button>
<Button  definition="link inverted"> Testando</Button>
<Button  definition="info inverted"> Testando</Button>
<Button  definition="success inverted"> Testando</Button>
<Button  definition="danger inverted"> Testando</Button>
</ButtonList>
  ).toJSON();

  expect(inverted).toMatchSnapshot();
});

// testa se a característica rounded está correta
test('rounded  correctly', () => {
  const rounded = renderer.create(
    <ButtonList>
    <Button  definition="primary rounded"> Testando</Button>
    <Button  definition="link rounded"> Testando</Button>
    <Button  definition="info rounded"> Testando</Button>
    <Button  definition="success rounded"> Testando</Button>
    <Button  definition="warning rounded"> Testando</Button>
    <Button  definition="danger rounded"> Testando</Button>
    </ButtonList>
    

  ).toJSON();

  expect(rounded).toMatchSnapshot();
});

// testa os estados
test('state  correctly', () => {

  const hovered = renderer.create(<ButtonList>
    <Button  > Testando</Button>
    <Button  definition="primary hovered"> Testando</Button>
    <Button  definition="link hovered"> Testando</Button>
    <Button  definition="info hovered"> Testando</Button>
    <Button  definition="success hovered"> Testando</Button>
    <Button  definition="warning hovered"> Testando</Button>
    <Button  definition="danger hovered"> Testando</Button>
    </ButtonList>
    
    ).toJSON();
  expect(hovered).toMatchSnapshot();

  const focused = renderer.create(<ButtonList>
    <Button  />
    <Button  definition="primary focused"> Testando</Button>
    <Button  definition="link focused"> Testando</Button>
    <Button  definition="info focused"> Testando</Button>
    <Button  definition="success focused"> Testando</Button>
    <Button  definition="warning focused"> Testando</Button>
    <Button  definition="danger focused"> Testando</Button>
    </ButtonList>).toJSON();

  expect(focused).toMatchSnapshot();

  const active = renderer.create(
    <ButtonList>
    <Button  />
    <Button  definition="primary active"> Testando</Button>
    <Button  definition="link active"> Testando</Button>
    <Button  definition="info active"> Testando</Button>
    <Button  definition="success active"> Testando</Button>
    <Button  definition="warning active"> Testando</Button>
    <Button  definition="danger active"> Testando</Button>
    </ButtonList>
    
    ).toJSON();

  expect(active).toMatchSnapshot();

});

test('loading corretly', () => {
  const loading = renderer.create(<ButtonList>
    <Button  definition="loading"> Testando</Button>
    <Button  definition="primary loading"> Testando</Button>
    <Button  definition="link loading"> Testando</Button>
    <Button  definition="info loading"> Testando</Button>
    <Button  definition="success loading"> Testando</Button>
    <Button  definition="warning loading"> Testando</Button>
    <Button  definition="danger loading"> Testando</Button>
    </ButtonList>).toJSON();

  expect(loading).toMatchSnapshot();

});

test('disabled corretly', () => {
  const disabled = renderer.create(<ButtonList>
    <Button  disabled={true} > Testando</Button>
    <Button  definition="primary" disabled={true} > Testando</Button>
    <Button  definition="link"  disabled={true} > Testando</Button>
    <Button  definition="info" disabled={true} > Testando</Button>
    <Button  definition="success" disabled={true} > Testando</Button>
    <Button  definition="warning" disabled={true} > Testando</Button>
    <Button  definition="danger" disabled={true} > Testando</Button>
    </ButtonList>).toJSON();

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
  
  <Button definition="primary">
  <Icon icon_name="fab fa-twitter">
    Twitter
  </Icon>
  </Button>
  
  <Button definition="success">
  <Icon icon_name="fas fa-check">
    Save
  </Icon>
  </Button>

  <Button definition="danger outlined">
  <Icon icon_name="fas fa-times" icon_right={true}>
    Delete
  </Icon>
  </Button>

  <Button definition="small">
  <Icon icon_name="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button >
  <Icon icon_name="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button definition="medium">
  <Icon icon_name="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button definition="large">
  <Icon icon_name="fab fa-github">
    Github
  </Icon>
  </Button>
</ButtonList>
  
 );

 expect(buttons_icons).toMatchSnapshot();
});

