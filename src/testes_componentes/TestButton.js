import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import Button from './biblioteca/elements/Button';
import ButtonList from './biblioteca/elements/ButtonList';

var onClick = ()=>{
 alert("clicou");
}

ReactDOM.render(
<>
<ButtonList>
<Button>Testando</Button>
<Button  definition="primary">Testando</Button>
<Button  definition="link"> Testando</Button>
<Button  definition="info"> Testando</Button>
<Button  definition="success"> Testando</Button>
<Button  definition="warning"> Testando</Button>
<Button  definition="danger"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="white"> Testando</Button>
<Button  definition="light"> Testando</Button>
<Button  definition="dark"> Testando</Button>
<Button  definition="black"> Testando</Button>
<Button  definition="text"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary light"> Testando</Button>
<Button  definition="link light"> Testando</Button>
<Button  definition="info light"> Testando</Button>
<Button  definition="success light"> Testando</Button>
<Button  definition="warning light"> Testando</Button>
<Button  definition="danger light"> Testando</Button>

</ButtonList>

<ButtonList>
<Button  definition="button small"> Testando</Button>
<Button  > Testando</Button>
<Button  definition="button normal"> Testando</Button>
<Button  definition="button medium"> Testando</Button>
<Button  definition="button large"> Testando</Button>
</ButtonList>

<ButtonList definition="small">
<Button  > Testando</Button>
<Button  > Testando</Button>
<Button  > Testando</Button>
</ButtonList>

<ButtonList definition="medium">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>

<ButtonList definition="large">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="small fullwidth"> Testando</Button>
<Button  definition="fullwidth"> Testando</Button>
<Button  definition="medium fullwidth"> Testando</Button>
<Button definition="large fullwidth"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary outlined"> Testando</Button>
<Button  definition="link outlined"> Testando</Button>
<Button  definition="info outlined"> Testando</Button>
<Button  definition="success outlined"> Testando</Button>
<Button  definition="warning outlined"> Testando</Button>
<Button  definition="danger outlined"> Testando</Button>
</ButtonList>

<ButtonList definition="primary">
<Button  definition="primary inverted"> Testando</Button>
<Button  definition="link inverted"> Testando</Button>
<Button  definition="info inverted"> Testando</Button>
<Button  definition="success inverted"> Testando</Button>
<Button  definition="danger inverted"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary rounded"> Testando</Button>
<Button  definition="link rounded"> Testando</Button>
<Button  definition="info rounded"> Testando</Button>
<Button  definition="success rounded"> Testando</Button>
<Button  definition="warning rounded"> Testando</Button>
<Button  definition="danger rounded"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  > Testando</Button>
<Button  definition="primary hovered"> Testando</Button>
<Button  definition="link hovered"> Testando</Button>
<Button  definition="info hovered"> Testando</Button>
<Button  definition="success hovered"> Testando</Button>
<Button  definition="warning hovered"> Testando</Button>
<Button  definition="danger hovered"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  />
<Button  definition="primary focused"> Testando</Button>
<Button  definition="link focused"> Testando</Button>
<Button  definition="info focused"> Testando</Button>
<Button  definition="success focused"> Testando</Button>
<Button  definition="warning focused"> Testando</Button>
<Button  definition="danger focused"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  />
<Button  definition="primary active"> Testando</Button>
<Button  definition="link active"> Testando</Button>
<Button  definition="info active"> Testando</Button>
<Button  definition="success active"> Testando</Button>
<Button  definition="warning active"> Testando</Button>
<Button  definition="danger active"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="loading"> Testando</Button>
<Button  definition="primary loading"> Testando</Button>
<Button  definition="link loading"> Testando</Button>
<Button  definition="info loading"> Testando</Button>
<Button  definition="success loading"> Testando</Button>
<Button  definition="warning loading"> Testando</Button>
<Button  definition="danger loading"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  disabled={true} > Testando</Button>
<Button  definition="primary" disabled={true} > Testando</Button>
<Button  definition="link"  disabled={true} > Testando</Button>
<Button  definition="info" disabled={true} > Testando</Button>
<Button  definition="success" disabled={true} > Testando</Button>
<Button  definition="warning" disabled={true} > Testando</Button>
<Button  definition="danger" disabled={true} > Testando</Button>
</ButtonList>
</>
    ,
  
  document.getElementById("root"))


//============================================================================================
// Abaixo outra bateria de teste usando icons, addons,fields, selected

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import './css/all.js';
import Icon from './biblioteca/elements/Icon';
import ButtonList from './biblioteca/elements/ButtonList';
import Button from './biblioteca/elements/Button';

ReactDOM.render(
  <>
  <div className="container is-fluid">
  <ButtonList>
  <Button>
  <Icon icon_definition="fas fa-bold"></Icon>
  </Button>
  
  <Button>
  <Icon icon_definition="fas fa-italic"></Icon>
  </Button>

  <Button>
  <Icon icon_definition="fas fa-underline"></Icon>
  </Button>

  <Button>
  <Icon icon_definition="fab fa-github">
    Github
  </Icon>
  </Button>
  
  <Button definition="primary">
  <Icon icon_definition="fab fa-twitter">
    Twitter
  </Icon>
  </Button>
  
  <Button definition="success">
  <Icon icon_definition="fas fa-check">
    Save
  </Icon>
  </Button>

  <Button definition="danger outlined">
  <Icon icon_definition="fas fa-times" icon_right={true}>
    Delete
  </Icon>
  </Button>

  <Button definition="small">
  <Icon icon_definition="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button >
  <Icon icon_definition="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button definition="medium">
  <Icon icon_definition="fab fa-github">
    Github
  </Icon>
  </Button>

  <Button definition="large">
  <Icon icon_definition="fab fa-github">
    Github
  </Icon>
  </Button>
  
  
</ButtonList>
</div>

  <div className="container is-fluid">
  <ButtonList  definition ="grouped">
    <Button definition="info"> Save Changes </Button>
    <Button> Cancel </Button>
    <Button definition="danger"> Delete post </Button>
  </ButtonList>
  </div>
  

  <div className="container is-fluid">
  <ButtonList definition="addons" field={true}> 
    <Button>
      <Icon icon_definition="fas fa-align-left">Left</Icon>
    </Button>
    <Button>
      <Icon icon_definition="fas fa-align-center">Center</Icon>
    </Button>
    <Button>
      <Icon icon_definition="fas fa-align-right">Right</Icon>
    </Button>
  </ButtonList>

  <ButtonList definition="addons" field={true}> 
    <Button>
      <Icon icon_definition="fas fa-bold">Bold</Icon>
    </Button>
    <Button>
      <Icon icon_definition="fas fa-italic">Italic</Icon>
    </Button>
    <Button>
    <Icon icon_definition="fas fa-underline">Underline</Icon>
    </Button>
  </ButtonList>
  </div>

  
  <div className="container is-fluid"> 
  <ButtonList definition="addons">
    <Button definition="success selected">Yes</Button>
    <Button>Maybe</Button>
    <Button>No</Button>
  </ButtonList>

  <ButtonList definition="addons centered">
    <Button>Yes</Button>
    <Button definition="info selected">Maybe</Button>
    <Button>No</Button>
  </ButtonList>

  <ButtonList definition="addons right">
    <Button>Yes</Button>
    <Button>Maybe</Button>
    <Button definition="danger selected">No</Button>
  </ButtonList>
  </div>
  
</>


    ,
  document.getElementById("root"));

*/