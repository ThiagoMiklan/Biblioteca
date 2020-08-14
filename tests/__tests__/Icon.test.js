import React from 'react';
import Icon from '../../src/components/Icon';
import renderer from 'react-test-renderer';


test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
    <div className="container is-fluid">
      <Icon icon_name="fas fa-info-circle" definition="has-text-info"></Icon>
      <Icon icon_name="fas fa-check-square" definition="has-text-success"></Icon>
      <Icon icon_name="fas fa-exclamation-triangle" definition="has-text-warning"></Icon>
      <Icon icon_name="fas fa-ban" definition="has-text-danger"></Icon>
      <Icon icon_name="fas fa-home" definition="has-text-warning is-small"></Icon>
      <Icon icon_name="fas fa-home" definition="has-text-warning is-medium"></Icon>
      <Icon icon_name="fas fa-home" definition="has-text-warning is-large"></Icon>
   </div>

    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();


});

