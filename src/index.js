import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Title from './components/Title'
import SubTitle from './components/Subtitle'


ReactDOM.render(
  <>
 <Title p={true} definition={1} spaced={true}>Title 1</Title>
<SubTitle p={true} definition={3}>Subtitle 3</SubTitle>
<Title p={true} definition={2}>Title 2</Title>
<SubTitle p={true} definition={4}>Subtitle 4</SubTitle>
<Title p={true} definition={3}>Title 3</Title>
<SubTitle p={true} definition={5}>Subtitle 5</SubTitle>
</>
,
  document.getElementById("root"))
