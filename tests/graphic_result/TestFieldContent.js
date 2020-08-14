import React from 'react';
import ReactDOM from 'react-dom';
import FieldContent from './components/FieldContent';
import Field from './components/Field'
import Image from './components/Image';
import 'bulma/css/bulma.css';


ReactDOM.render(
<>
    <FieldContent label="Content 2"> 
      <Image  definition="is-128x128" src="https://bulma.io/images/bulma-logo.png"/>
    </FieldContent>
    <Field label="Content 2"> 
      <Image  definition="is-128x128" src="https://bulma.io/images/bulma-logo.png"/>
    </Field>
  </>
  

  
,document.getElementById('root'));



/*
<>
    
    <FieldContent label="Content 2"> 
      <Image  definition="is-128x128" src="https://bulma.io/images/bulma-logo.png"/>
    </FieldContent>
  </>
  

*/