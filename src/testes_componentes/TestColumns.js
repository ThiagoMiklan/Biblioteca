import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Columns from './biblioteca/Columns';
import Column from './biblioteca/Column';


ReactDOM.render(<>
  <Columns>

    <Column definition="column background_primary">
      First column
  </Column>

    <Column definition="column background_primary">
      Second column
  </Column>

    <Column definition="column background_primary">
      Third column
  </Column>

    <Column definition="column background_primary">
      Fourth column
  </Column>

  </Columns>



  <Columns>
    <Column definition="full background_primary">
      full
      </Column>

  </Columns>

  <Columns>
    <Column definition="four-fifths background_primary">
      four-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="three-quarters background_primary">
      three-quarters
      </Column>
  </Columns>

  <Columns>
    <Column definition="two-thirds background_primary">
      two-thirds
      </Column>
  </Columns>

  <Columns>
    <Column definition="three-fifths background_primary">
      three-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="half background_primary">
      half
      </Column>
  </Columns>

  <Columns>
    <Column definition="two-fifths background_primary">
      two-fifths
      </Column>
  </Columns>

  <Columns>
    <Column definition="one-third background_primary">
      one-third
      </Column>
  </Columns>

  <Columns>
    <Column definition="one-quarter background_primary">
      one-quarter
      </Column>
  </Columns>

  <Columns>
    <Column definition="one-fifth background_primary">
      one-fifth
      </Column>
  </Columns>




















  <Columns>
    <Column definition="1 background_primary">
      1
      </Column>

  </Columns>

  <Columns>
    <Column definition="2 background_primary">
      2
      </Column>
  </Columns>

  <Columns>
    <Column definition="3 background_primary">
      3
      </Column>
  </Columns>

  <Columns>
    <Column definition="4 background_primary">
      4
      </Column>
  </Columns>

  <Columns>
    <Column definition="5 background_primary">
      5
      </Column>
  </Columns>

  <Columns>
    <Column definition="6 background_primary">
      6
      </Column>
  </Columns>

  <Columns>
    <Column definition="7 background_primary">
      7
      </Column>
  </Columns>

  <Columns>
    <Column definition="8 background_primary">
      8
      </Column>
  </Columns>

  <Columns>
    <Column definition="9 background_primary">
      9
      </Column>
  </Columns>

  <Columns>
    <Column definition="10 background_primary">
      10
      </Column>
  </Columns>

  <Columns>
    <Column definition="11 background_primary">
      11
      </Column>
  </Columns>

  <Columns>
    <Column definition="12 background_primary">
      12
      </Column>
  </Columns>

  <Columns>
    <Column definition="half offset-one-quarter background_primary">
      half offset-one-quarter
  </Column>
  </Columns>

  <Columns>
    <Column definition="three-fifths offset-one-fifth background_primary">
      three-fifths offset-one-fifth
  </Column>
  </Columns>

  <Columns>
    <Column definition="4 offset-8 background_primary">
      4 offset-8
  </Column>
  </Columns>

  <Columns>
    <Column definition="11 offset-1 background_primary">
      11 offset-1
  </Column>
  </Columns>

  <Columns>
    <Column definition="narrow">
      <p class="title is-5">Narrow column</p>
      <p class="subtitle">This column is only 200px wide.</p>
    </Column>
  </Columns>


</>
  , document.getElementById('root')
);
