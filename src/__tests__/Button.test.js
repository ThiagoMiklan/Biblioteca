import React from 'react';
import { toHaveClass, toHaveAttribute } from '@testing-library/jest-dom'
import Button from '../biblioteca/elements/Button';
import ButtonList from '../biblioteca/elements/ButtonList';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';

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
    <Button value="testando" />
    <Button value="testando" definition="primary" />
    <Button value="testando" definition="link" />
    <Button value="testando" definition="info" />
    <Button value="testando" definition="success" />
    <Button value="testando" definition="warning" />
    <Button value="testando" definition="danger" />
  </ButtonList>).toJSON();

  expect(simple_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores secundárias dos botões
test('color secundary correctly', () => {

  const secundary_color = renderer.create(<ButtonList>
    <Button value="testando" definition="white" />
    <Button value="testando" definition="light" />
    <Button value="testando" definition="dark" />
    <Button value="testando" definition="black" />
    <Button value="testando" definition="text" />
  </ButtonList>).toJSON();

  expect(secundary_color).toMatchSnapshot();
});

// testa se as cores estão corretas, cores com característica claras
test('colors light correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button value="testando" definition="primary light" />
    <Button value="testando" definition="link light" />
    <Button value="testando" definition="info light" />
    <Button value="testando" definition="success light" />
    <Button value="testando" definition="warning light" />
    <Button value="testando" definition="danger light" />
  </ButtonList>).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('buttons size correctly', () => {

  const light_color = renderer.create(<ButtonList>
    <Button value="testando" definition="button small" />
    <Button value="testando" />
    <Button value="testando" definition="button normal" />
    <Button value="testando" definition="button medium" />
    <Button value="testando" definition="button large" />
  </ButtonList>).toJSON();

  expect(light_color).toMatchSnapshot();
});

// testa se os tamanhos dos botões estão corretos
test('button list size correctly', () => {

  const small = renderer.create(
    <ButtonList definition="small">
      <Button value="Small" />
      <Button value="Small" />
      <Button value="Small" />
    </ButtonList>).toJSON();
  expect(small).toMatchSnapshot();

  const medium = renderer.create(
    <ButtonList definition="medium">
      <Button value="Medium" />
      <Button value="Medium" />
      <Button value="Medium" />
    </ButtonList>).toJSON();
  expect(medium).toMatchSnapshot();

  const large = renderer.create(
    <ButtonList definition="large">
      <Button value="Large" />
      <Button value="Large" />
      <Button value="Large" />
    </ButtonList>).toJSON();
  expect(large).toMatchSnapshot();
});

// testa se a característica fullwidth está correta
test('fullwidth  correctly', () => {

  const fullwidth = renderer.create(<ButtonList>
    <Button value="Small" definition="small fullwidth" />
    <Button value="Normal" definition="fullwidth" />
    <Button value="Medium" definition="medium fullwidth" />
    <Button value="Large" definition="large fullwidth" />
  </ButtonList>).toJSON();

  expect(fullwidth).toMatchSnapshot();
});

// testa se a característica outlined está correta
test('outlined  correctly', () => {
  const outlined = renderer.create(<ButtonList>
    <Button value="testando" definition="primary outlined" />
    <Button value="testando" definition="link outlined" />
    <Button value="testando" definition="info outlined" />
    <Button value="testando" definition="success outlined" />
    <Button value="testando" definition="warning outlined" />
    <Button value="testando" definition="danger outlined" />
  </ButtonList>).toJSON();

  expect(outlined).toMatchSnapshot();
});

// testa se a característica inverted está correta
test('inverted  correctly', () => {
  const inverted = renderer.create(
    <ButtonList definition="primary">
      <Button value="testando" definition="primary inverted" />
      <Button value="testando" definition="link inverted" />
      <Button value="testando" definition="info inverted" />
      <Button value="testando" definition="success inverted" />
      <Button value="testando" definition="danger inverted" />
    </ButtonList>
  ).toJSON();

  expect(inverted).toMatchSnapshot();
});

// testa se a característica rounded está correta
test('rounded  correctly', () => {
  const rounded = renderer.create(
    <ButtonList>
      <Button value="testando" definition="primary rounded" />
      <Button value="testando" definition="link rounded" />
      <Button value="testando" definition="info rounded" />
      <Button value="testando" definition="success rounded" />
      <Button value="testando" definition="warning rounded" />
      <Button value="testando" definition="danger rounded" />
    </ButtonList>

  ).toJSON();

  expect(rounded).toMatchSnapshot();
});

// testa os estados
test('rounded  correctly', () => {

  const hovered = renderer.create(<ButtonList>
    <Button value="testando" />
    <Button value="testando" definition="primary hovered" />
    <Button value="testando" definition="link hovered" />
    <Button value="testando" definition="info hovered" />
    <Button value="testando" definition="success hovered" />
    <Button value="testando" definition="warning hovered" />
    <Button value="testando" definition="danger hovered" />
  </ButtonList>).toJSON();
  expect(hovered).toMatchSnapshot();

  const focused = renderer.create(<ButtonList>
    <Button value="testando" />
    <Button value="testando" definition="primary focused" />
    <Button value="testando" definition="link focused" />
    <Button value="testando" definition="info focused" />
    <Button value="testando" definition="success focused" />
    <Button value="testando" definition="warning focused" />
    <Button value="testando" definition="danger focused" />
  </ButtonList>).toJSON();

  expect(focused).toMatchSnapshot();

  const active = renderer.create(<ButtonList>
    <Button value="testando" />
    <Button value="testando" definition="primary active" />
    <Button value="testando" definition="link active" />
    <Button value="testando" definition="info active" />
    <Button value="testando" definition="success active" />
    <Button value="testando" definition="warning active" />
    <Button value="testando" definition="danger active" />
  </ButtonList>).toJSON();

  expect(active).toMatchSnapshot();

});

test('loading corretly', () => {
  const loading = renderer.create(<ButtonList>
    <Button value="testando" definition="loading" />
    <Button value="testando" definition="primary loading" />
    <Button value="testando" definition="link loading" />
    <Button value="testando" definition="info loading" />
    <Button value="testando" definition="success loading" />
    <Button value="testando" definition="warning loading" />
    <Button value="testando" definition="danger loading" />
  </ButtonList>).toJSON();

  expect(loading).toMatchSnapshot();

});

test('disabled corretly', () => {
  const disabled = renderer.create(<ButtonList>
    <Button value="testando" disabled={true} />
    <Button value="testando" definition="primary" disabled={true} />
    <Button value="testando" definition="link" disabled={true} />
    <Button value="testando" definition="info" disabled={true} />
    <Button value="testando" definition="success" disabled={true} />
    <Button value="testando" definition="warning" disabled={true} />
    <Button value="testando" definition="danger" disabled={true} />
  </ButtonList>).toJSON();

  expect(disabled).toMatchSnapshot();

});