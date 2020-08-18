import React from 'react';
import renderer from 'react-test-renderer';
import Columns from '../../src/components/Columns';
import Column from '../../src/components/Column';


test('columns normal',()=>{
    const component = renderer.create(
         <Columns >
    <Column definition="has-background-primary">
      First column
    </Column>

    <Column definition="has-background-primary">
      Second column
    </Column>

    <Column definition="has-background-primary">
      Third column
    </Column>

    <Column definition="has-background-primary">
      Fourth column
    </Column>
  </Columns>
  ).toJSON();
    expect(component).toMatchSnapshot();
});

test('columns with name',()=>{
    const component = renderer.create(
        <>
         <Columns>
    <Column definition="is-full has-background-primary">
      full
      </Column>

  </Columns>

  <Columns>
    <Column definition="is-four-fifths has-background-primary">
      four-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-three-quarters has-background-primary">
      three-quarters
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-two-thirds has-background-primary">
      two-thirds
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-three-fifths has-background-primary">
      three-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-half has-background-primary">
      half
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-two-fifths has-background-primary">
      two-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-one-third has-background-primary">
      one-third
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-one-quarter has-background-primary">
      one-quarter
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-one-fifth has-background-primary">
      one-fifth
      </Column>
  </Columns>
  </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});


test('columns with numbers',()=>{
    const component = renderer.create(
        <>
      <Columns>
    <Column definition="is-1 has-background-primary">
      1
      </Column>

  </Columns>

  <Columns>
    <Column definition="is-2 has-background-primary">
      2
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-3 has-background-primary">
      3
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-4  has-background-primary">
      4
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-5  has-background-primary">
      5
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-6  has-background-primary">
      6
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-7 has-background-primary">
      7
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-8 has-background-primary">
      8
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-9 has-background-primary">
      9
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-10 has-background-primary">
      10
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-11 has-background-primary">
      11
      </Column>
  </Columns>

  <Columns>
    <Column definition="is-12  has-background-primary">
      12
      </Column>
  </Columns>
  </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});


test('columns offset',()=>{
    const component = renderer.create(
        <>
    <Columns definition="is-mobile">
    <Column definition="is-half is-offset-one-quarter has-background-primary">
      half offset-one-quarter
  </Column>
  </Columns>

  <Columns  definition="is-mobile">
    <Column definition="is-three-fifths is-offset-one-fifth has-background-primary">
      three-fifths offset-one-fifth
  </Column>
  </Columns>

  <Columns  definition="is-mobile">
    <Column definition="is-4 is-offset-8 has-background-primary">
      4 offset-8
  </Column>
  </Columns>

  <Columns definition="is-mobile">
    <Column definition="is-11 is-offset-1 has-background-primary">
      11 offset-1
  </Column>
  </Columns>
  </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});


test('columns narrow',()=>{
    const component = renderer.create(
        <>
    <Columns>
    <Column definition="is-narrow">
      <p class="title is-5">Narrow column</p>
      <p class="subtitle">This column is only 200px wide.</p>
    </Column>
  </Columns>
  </>
  ).toJSON();
    expect(component).toMatchSnapshot();
});



