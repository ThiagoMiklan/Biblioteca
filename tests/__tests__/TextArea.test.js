import React from 'react';
import Tag from '../../src/components/Tag';
import TextArea from '../../src/components/TextArea';
import Control from '../../src/components/Control';
import renderer from 'react-test-renderer';




test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
        <>
          <div className="container is-fluid">
      <div className="columns">
          <div className="column is-half">
          
          <TextArea placeholder="e.g. Hello world"></TextArea>

          <TextArea rows={"10"} placeholder="10 lines of text"></TextArea>

          <Control>
            <TextArea definition="is-primary" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-info" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-success" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-warning" placeholder="e.g. Hello world"></TextArea>
            <br></br>
            <TextArea definition="is-danger" placeholder="e.g. Hello world"></TextArea>
            <br></br>
          </Control>

          <TextArea definition="is-small" placeholder="e.g. Hello world"></TextArea>
          <TextArea placeholder="e.g. Hello world"></TextArea>
          <TextArea definition="is-medium" placeholder="e.g. Hello world"></TextArea>
          <TextArea definition="is-large" placeholder="e.g. Hello world"></TextArea>

          <br></br>
          <TextArea placeholder="e.g. Hello world" loading={true} readonly={true}></TextArea>
          <TextArea placeholder="e.g. Hello world" loading={true} disabled={true}></TextArea>
          </div>
      </div>
     </div>
        
       </>

    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();


});

