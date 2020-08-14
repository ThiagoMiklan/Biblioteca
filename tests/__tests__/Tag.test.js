import React from 'react';
import Tag from '../../src/components/Tag';
import Control from '../../src/components/Control';
import renderer from 'react-test-renderer';

var tags = [];
tags[0] = {definition: "tag primary rounded large light", value:"tag1"} ;
tags[1] = {definition: "tag primary", value:"tag2"} ;

  

test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
        <>
        <Tag>Tag label</Tag>
        <Tag definition="is-black">Tag label</Tag>
        <Tag definition="is-dark">Tag label</Tag>
        <Tag definition="is-light">Tag label</Tag>
        <Tag definition="is-white">Tag label</Tag>
        <Tag definition="is-primary">Tag label</Tag>
        <Tag definition="is-link">Tag label</Tag>
        <Tag definition="is-info">Tag label</Tag>
        <Tag definition="is-success">Tag label</Tag>
        <Tag definition="is-warning">Tag label</Tag>
        <Tag definition="is-danger">Tag label</Tag>
        <Control></Control>
        <Tag definition="is-primary is-light">Tag label</Tag>
        <Tag definition="is-link is-light">Tag label</Tag>
        <Tag definition="is-info is-light">Tag label</Tag>
        <Tag definition="is-success is-light">Tag label</Tag>
        <Tag definition="is-warning is-light">Tag label</Tag>
        <Tag definition="is-danger is-light">Tag label</Tag>
        <Control></Control>
        <Tag definition="is-link">Normal</Tag>
        <Tag definition="is-primary is-medium">Normal</Tag>
        <Tag definition="is-link is-large">Normal</Tag>
        <Control></Control>
        <Tag definition="is-primary is-rounded">Tag rounded</Tag>
        <Tag onClickDelete={()=>{alert("clicou")}}definition="is-primary is-rounded" delete={true}>Tag rounded</Tag>
        
       </>

    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();


});

