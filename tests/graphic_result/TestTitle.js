import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title'
import SubTitle from './components/Subtitle';
import 'bulma/css/bulma.css';

ReactDOM.render(<div className="container is-fluid">
  <Title definition={1}>Title</Title>
  <SubTitle definition={2}>SubTitle</SubTitle>

  <Title definition={1}> Title 1</Title>
  <Title definition={2}> Title 2</Title>
  <Title definition={3}> Title 3</Title>
  <Title definition={4}> Title 4</Title>
  <Title definition={5}> Title 5</Title>
  <Title definition={6}> Title 6</Title>

  <SubTitle definition={1}> SubTitle 1</SubTitle>
  <SubTitle definition={2}> SubTitle 2</SubTitle>
  <SubTitle definition={3}> SubTitle 3</SubTitle>
  <SubTitle definition={4}> SubTitle 4</SubTitle>
  <SubTitle definition={5}> SubTitle 5</SubTitle>
  <SubTitle definition={6}> SubTitle 6</SubTitle>

  <Title p={true} definition={1}> Title with p 1</Title>
  <Title p={true} definition={2}> Title with p 2</Title>
  <Title p={true} definition={3}> Title with p 3</Title>
  <Title p={true} definition={4}> Title with p 4</Title>
  <Title p={true} definition={5}> Title with p 5</Title>
  <Title p={true} definition={6}> Title with p 6</Title>

  <Title p={true} definition={1} spaced={true}>Title 1</Title>
  <SubTitle p={true} definition={3}>Subtitle 3</SubTitle>
  <Title p={true} definition={2}>Title 2</Title>
  <SubTitle p={true} definition={4}>Subtitle 4</SubTitle>
  <Title p={true} definition={3}>Title 3</Title>
  <SubTitle p={true} definition={5}>Subtitle 5</SubTitle>

</div>

  ,

  document.getElementById("root"))


