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
<Button value="testando" />
<Button value="testando" definition="primary"/>
<Button value="testando" definition="link"/>
<Button value="testando" definition="info"/> 
<Button value="testando" definition="success"/> 
<Button value="testando" definition="warning"/>
<Button value="testando" definition="danger"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="white"/>
<Button value="testando" definition="light"/> 
<Button value="testando" definition="dark"/> 
<Button value="testando" definition="black"/>
<Button value="testando" definition="text"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="primary light"/>
<Button value="testando" definition="link light"/>
<Button value="testando" definition="info light"/> 
<Button value="testando" definition="success light"/> 
<Button value="testando" definition="warning light"/>
<Button value="testando" definition="danger light"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="button small"/> 
<Button value="testando" />
<Button value="testando" definition="button normal"/>
<Button value="testando" definition="button medium"/>
<Button value="testando" definition="button large"/>
</ButtonList>

<ButtonList definition="small">
<Button value="Small" />
<Button value="Small" />
<Button value="Small" />
</ButtonList>

<ButtonList definition="medium">
<Button value="Medium"/>
<Button value="Medium"/>
<Button value="Medium"/>
</ButtonList>

<ButtonList definition="large">
<Button value="Large"/>
<Button value="Large"/>
<Button value="Large"/>
</ButtonList>

<ButtonList>
<Button value="Small" definition="small fullwidth"/>
<Button value="Normal" definition="fullwidth"/>
<Button value="Medium" definition="medium fullwidth"/>
<Button value="Large"definition="large fullwidth"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="primary outlined"/>
<Button value="testando" definition="link outlined"/>
<Button value="testando" definition="info outlined"/> 
<Button value="testando" definition="success outlined"/> 
<Button value="testando" definition="warning outlined"/>
<Button value="testando" definition="danger outlined"/>
</ButtonList>

<ButtonList definition="primary">
<Button value="testando" definition="primary inverted"/>
<Button value="testando" definition="link inverted"/>
<Button value="testando" definition="info inverted"/> 
<Button value="testando" definition="success inverted"/> 
<Button value="testando" definition="danger inverted"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="primary rounded"/>
<Button value="testando" definition="link rounded"/>
<Button value="testando" definition="info rounded"/> 
<Button value="testando" definition="success rounded"/> 
<Button value="testando" definition="warning rounded"/>
<Button value="testando" definition="danger rounded"/>
</ButtonList>

<ButtonList>
<Button value="testando" />
<Button value="testando" definition="primary hovered"/>
<Button value="testando" definition="link hovered"/>
<Button value="testando" definition="info hovered"/> 
<Button value="testando" definition="success hovered"/> 
<Button value="testando" definition="warning hovered"/>
<Button value="testando" definition="danger hovered"/>
</ButtonList>

<ButtonList>
<Button value="testando" />
<Button value="testando" definition="primary focused"/>
<Button value="testando" definition="link focused"/>
<Button value="testando" definition="info focused"/> 
<Button value="testando" definition="success focused"/> 
<Button value="testando" definition="warning focused"/>
<Button value="testando" definition="danger focused"/>
</ButtonList>

<ButtonList>
<Button value="testando" />
<Button value="testando" definition="primary active"/>
<Button value="testando" definition="link active"/>
<Button value="testando" definition="info active"/> 
<Button value="testando" definition="success active"/> 
<Button value="testando" definition="warning active"/>
<Button value="testando" definition="danger active"/>
</ButtonList>

<ButtonList>
<Button value="testando" definition="loading"/>
<Button value="testando" definition="primary loading"/>
<Button value="testando" definition="link loading"/>
<Button value="testando" definition="info loading"/> 
<Button value="testando" definition="success loading"/> 
<Button value="testando" definition="warning loading"/>
<Button value="testando" definition="danger loading"/>
</ButtonList>

<ButtonList>
<Button value="testando" disabled={true} />
<Button value="testando" definition="primary" disabled={true} />
<Button value="testando" definition="link"  disabled={true} />
<Button value="testando" definition="info" disabled={true} /> 
<Button value="testando" definition="success" disabled={true} /> 
<Button value="testando" definition="warning" disabled={true} />
<Button value="testando" definition="danger" disabled={true} />
</ButtonList>






</>
    ,
  
  document.getElementById("root"))