
import React from 'react';
import ReactDOM from 'react-dom';
import FieldButton from './components/FieldButton';
import 'bulma/css/bulma.css';


ReactDOM.render(<>
    <FieldButton  definition="is-primary" label="Example FieldButton" button_definition="is-danger">
      FieldButton press
    </FieldButton>
  </>,document.getElementById('root'));
