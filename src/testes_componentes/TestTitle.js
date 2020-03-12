import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Title from './biblioteca/elements/Title'

ReactDOM.render(
  <>
<Title p={true} definition="1"> Título 1</Title> 
<Title p={true}  definition="2"> Título 2</Title>
<Title p={true}  definition="3"> Título 3</Title>
<Title p={true}  definition="4"> Título 4</Title> 
<Title p={true}  definition="5"> Título 5</Title>
<Title p={true}  definition="6"> Título 6</Title> 

<Title definition="1"> Título 1</Title> 
<Title definition="2"> Título 2</Title>
<Title definition="3"> Título 3</Title>
<Title definition="4"> Título 4</Title> 
<Title definition="5"> Título 5</Title>
<Title definition="6"> Título 6</Title> 
</>
    ,
  
  document.getElementById("root"))