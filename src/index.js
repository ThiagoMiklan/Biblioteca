import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Columns from './biblioteca/Columns';
import Column from './biblioteca/Column';


ReactDOM.render(
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
,document.getElementById('root')
);
