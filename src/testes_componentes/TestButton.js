import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import Button from './biblioteca/Button';
import ButtonList from './biblioteca/ButtonList';
import Columns from './biblioteca/Columns';
import Column from './biblioteca/Column';

var onClick = ()=>{
 alert("Clicked");
}

var custom = {
  onClick : onClick
}

ReactDOM.render(
<>

<Button onClick={onClick} definition="success">Click</Button>

<Button {...custom} definition="success">Click</Button>

<ButtonList>
<Button>Testando</Button>
<Button  definition="primary">Primary</Button>
<Button  definition="link"> Link</Button>
<Button  definition="info"> Info</Button>
<Button  definition="success"> Success</Button>
<Button  definition="warning"> Warning</Button>
<Button  definition="danger"> Danger</Button>
</ButtonList>

<ButtonList>
<Button  definition="white"> White</Button>
<Button  definition="light"> Light</Button>
<Button  definition="dark"> Dark</Button>
<Button  definition="black"> Black</Button>
<Button  definition="text"> Text</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary light"> primary light</Button>
<Button  definition="link light"> link light</Button>
<Button  definition="info light"> info light</Button>
<Button  definition="success light"> success light</Button>
<Button  definition="warning light"> warning light</Button>
<Button  definition="danger light"> danger light</Button>
</ButtonList>

<ButtonList>
<Button  definition="button small"> Small</Button>
<Button  > Normal</Button>
<Button  definition="button medium"> Medium</Button>
<Button  definition="button large"> Large</Button>
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

<Columns>
<Column definition="half">
<Button  definition="small fullwidth"> small fullwidth</Button>
<Button  definition="fullwidth"> normal fullwidth</Button>
<Button  definition="medium fullwidth"> medium fullwidth</Button>
<Button definition="large fullwidth"> large fullwidth</Button>
</Column>
</Columns>



<ButtonList>
<Button  definition="primary outlined"> primary outlined</Button>
<Button  definition="link outlined"> link outlined</Button>
<Button  definition="info outlined"> info outlined</Button>
<Button  definition="success outlined"> success outlined</Button>
<Button  definition="warning outlined"> warning outlined</Button>
<Button  definition="danger outlined"> danger outlined</Button>
</ButtonList>

<ButtonList definition="primary">
<Button  definition="primary inverted"> primary inverted</Button>
<Button  definition="link inverted"> link inverted</Button>
<Button  definition="info inverted"> info inverted</Button>
<Button  definition="success inverted"> success inverted</Button>
<Button  definition="danger inverted"> danger inverted</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary rounded"> primary rounded</Button>
<Button  definition="link rounded"> link rounded</Button>
<Button  definition="info rounded"> info rounded</Button>
<Button  definition="success rounded"> success rounded</Button>
<Button  definition="warning rounded"> warning rounded</Button>
<Button  definition="danger rounded"> danger rounded</Button>
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
<Button  definition="primary focused"> primary focused</Button>
<Button  definition="link focused"> link focused</Button>
<Button  definition="info focused"> info focused</Button>
<Button  definition="success focused"> success focused</Button>
<Button  definition="warning focused"> warning focused</Button>
<Button  definition="danger focused"> danger focused</Button>
</ButtonList>

<ButtonList>
<Button  definition="primary active"> primary active</Button>
<Button  definition="link active"> link active</Button>
<Button  definition="info active"> info active</Button>
<Button  definition="success active"> success active</Button>
<Button  definition="warning active"> warning active</Button>
<Button  definition="danger active"> danger active</Button>
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
<Button  definition="primary" disabled={true} > primary disabled</Button>
<Button  definition="link"  disabled={true} > link disabled</Button>
<Button  definition="info" disabled={true} > info disabled</Button>
<Button  definition="success" disabled={true} > success disabled</Button>
<Button  definition="warning" disabled={true} > warning disabled</Button>
<Button  definition="danger" disabled={true} > danger disabled</Button>
</ButtonList>
</>
    ,
  
  document.getElementById("root"))


//============================================================================================
// Abaixo outra bateria de teste usando icons, addons,fields, selected

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 

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