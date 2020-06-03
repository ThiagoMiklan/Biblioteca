import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Button from './components/Button';
import ButtonList from './components/ButtonList';
import Columns from './components/Columns';
import Column from './components/Column';

var onClick = ()=>{
 alert("Clicked");
}

var custom = {
  onClick : onClick
}

ReactDOM.render(
<>

<Button onClick={onClick} definition="is-success">Click</Button>

<Button {...custom} definition="is-success">Click</Button>

<ButtonList>
<Button>Testando</Button>
<Button  definition="is-primary">Primary</Button>
<Button  definition="is-link"> Link</Button>
<Button  definition="is-info"> Info</Button>
<Button  definition="is-success"> Success</Button>
<Button  definition="is-warning"> Warning</Button>
<Button  definition="is-danger"> Danger</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-white"> White</Button>
<Button  definition="is-light"> Light</Button>
<Button  definition="is-dark"> Dark</Button>
<Button  definition="is-black"> Black</Button>
<Button  definition="is-text"> Text</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-light"> primary light</Button>
<Button  definition="is-link is-light"> link light</Button>
<Button  definition="is-info is-light"> info light</Button>
<Button  definition="is-success is-light"> success light</Button>
<Button  definition="is-warning is-light"> warning light</Button>
<Button  definition="is-danger is-light"> danger light</Button>
</ButtonList>

<ButtonList>
<Button  definition="button is-small"> Small</Button>
<Button  > Normal</Button>
<Button  definition="button is-medium"> Medium</Button>
<Button  definition="button is-large"> Large</Button>
</ButtonList>

<ButtonList definition="are-small">
<Button  > Testando</Button>
<Button  > Testando</Button>
<Button  > Testando</Button>
</ButtonList>

<ButtonList definition="are-medium">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>

<ButtonList definition="are-large">
<Button > Testando</Button>
<Button > Testando</Button>
<Button > Testando</Button>
</ButtonList>

<Columns>
<Column definition="is-half">
<Button  definition="is-small is-fullwidth"> small fullwidth</Button>
<Button  definition="is-fullwidth"> normal fullwidth</Button>
<Button  definition="is-medium is-fullwidth"> medium fullwidth</Button>
<Button definition="is-large is-fullwidth"> large fullwidth</Button>
</Column>
</Columns>



<ButtonList>
<Button  definition="is-primary is-outlined"> primary outlined</Button>
<Button  definition="is-link is-outlined"> link outlined</Button>
<Button  definition="is-info is-outlined"> info outlined</Button>
<Button  definition="is-success is-outlined"> success outlined</Button>
<Button  definition="is-warning is-outlined"> warning outlined</Button>
<Button  definition="is-danger is-outlined"> danger outlined</Button>
</ButtonList>

<ButtonList definition="is-primary">
<Button  definition="is-primary is-inverted"> primary inverted</Button>
<Button  definition="is-link is-inverted"> link inverted</Button>
<Button  definition="is-info is-inverted"> info inverted</Button>
<Button  definition="is-success is-inverted"> success inverted</Button>
<Button  definition="is-danger is-inverted"> danger inverted</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-rounded"> primary rounded</Button>
<Button  definition="is-link is-rounded"> link rounded</Button>
<Button  definition="is-info is-rounded"> info rounded</Button>
<Button  definition="is-success is-rounded"> success rounded</Button>
<Button  definition="is-warning is-rounded"> warning rounded</Button>
<Button  definition="is-danger is-rounded"> danger rounded</Button>
</ButtonList>

<ButtonList>
<Button  > Testando</Button>
<Button  definition="is-primary is-hovered"> Testando</Button>
<Button  definition="is-link is-hovered"> Testando</Button>
<Button  definition="is-info is-hovered"> Testando</Button>
<Button  definition="is-success is-hovered"> Testando</Button>
<Button  definition="is-warning is-hovered"> Testando</Button>
<Button  definition="is-danger is-hovered"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-focused"> primary focused</Button>
<Button  definition="is-link is-focused"> link focused</Button>
<Button  definition="is-info is-focused"> info focused</Button>
<Button  definition="is-success is-focused"> success focused</Button>
<Button  definition="is-warning is-focused"> warning focused</Button>
<Button  definition="is-danger is-focused"> danger focused</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-active"> primary active</Button>
<Button  definition="is-link is-active"> link active</Button>
<Button  definition="is-info is-active"> info active</Button>
<Button  definition="is-success is-active"> success active</Button>
<Button  definition="is-warning is-active"> warning active</Button>
<Button  definition="is-danger is-active"> danger active</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-loading"> Testando</Button>
<Button  definition="is-primary is-loading"> Testando</Button>
<Button  definition="is-link is-loading"> Testando</Button>
<Button  definition="is-info is-loading"> Testando</Button>
<Button  definition="is-success is-loading"> Testando</Button>
<Button  definition="is-warning is-loading"> Testando</Button>
<Button  definition="is-danger is-loading"> Testando</Button>
</ButtonList>

<ButtonList>
<Button  definition="is-primary" disabled={true} > primary disabled</Button>
<Button  definition="is-link"  disabled={true} > link disabled</Button>
<Button  definition="is-info" disabled={true} > info disabled</Button>
<Button  definition="is-uccess" disabled={true} > success disabled</Button>
<Button  definition="is-warning" disabled={true} > warning disabled</Button>
<Button  definition="is-danger" disabled={true} > danger disabled</Button>
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