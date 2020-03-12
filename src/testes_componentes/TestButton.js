import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
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