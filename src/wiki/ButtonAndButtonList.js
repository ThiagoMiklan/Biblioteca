import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Button from './components/Button';
import ButtonList from './components/ButtonList';
import Columns from './components/Columns';
import Column from './components/Column';

const onClick = ()=>{
 alert("Clicked");
}

const custom = {
  onDoubleClick : onClick
}


ReactDOM.render(
<>
<br/>
<ButtonList>
<Button  definition="is-primary" label="Primary"/>
<Button  definition="is-link" label="Link"/>
<Button  definition="is-info" label="Info"/>
<Button  definition="is-success" label="Success"/>
<Button  definition="is-warning" label="Warning"/>
<Button  definition="is-danger" label="Danger"/>
</ButtonList>



<ButtonList>
<Button  definition="is-white" label="White"/>
<Button  definition="is-light" label="Light"/>
<Button  definition="is-dark" label="Dark"/>
<Button  definition="is-black" label="Black"/>
<Button  definition="is-text" label="Text"/>
</ButtonList>


<ButtonList>
<Button  definition="is-primary is-light" label="primary light"/>
<Button  definition="is-link is-light" label="link light"/>
<Button  definition="is-info is-light" label="info light"/>
<Button  definition="is-success is-light" label="success light"/>
<Button  definition="is-warning is-light" label="warning light"/>
<Button  definition="is-danger is-light" label="danger light"/>
</ButtonList>

<ButtonList>
<Button definition="button is-small" label="Small"/>
<Button label="Normal"/>
<Button definition="button is-medium" label="Medium"/>
<Button definition="button is-large" label="Large"/>
</ButtonList>

<ButtonList definition="are-small">
<Button label="Small"/>
<Button label="Small"/>
<Button label="Small"/>
</ButtonList>

<ButtonList definition="are-medium">
<Button label="Medium"/> 
<Button label="Medium"/> 
<Button label="Medium"/> 
</ButtonList>

<ButtonList definition="are-large">
<Button label="Large"/> 
<Button label="Large"/> 
<Button label="Large"/> 
</ButtonList>

<Columns>
<Column definition="is-half">
<Button  definition="is-small is-fullwidth" label="small fullwidt"/>
<Button  definition="is-fullwidth" label="normal fullwidth"/>
<Button  definition="is-medium is-fullwidth" label="medium fullwidth"/>
<Button definition="is-large is-fullwidth" label="large fullwidth"/>
</Column>
</Columns>


<ButtonList>
<Button  definition="is-primary is-outlined" label="primary outlined"/>
<Button  definition="is-link is-outlined" label=" link outlined"/>
<Button  definition="is-info is-outlined" label="info outlined"/>
<Button  definition="is-success is-outlined" label="success outlined"/> 
<Button  definition="is-warning is-outlined" label="warning outlined"/>
<Button  definition="is-danger is-outlined" label="danger outlined"/>
</ButtonList>

<ButtonList definition="is-primary">
<Button  definition="is-primary is-inverted" label="primary inverted"/>
<Button  definition="is-link is-inverted" label="link inverted"/>
<Button  definition="is-info is-inverted" label="info inverted"/>
<Button  definition="is-success is-inverted" label="success inverted"/> 
<Button  definition="is-danger is-inverted" label="danger inverted"/> 
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-rounded" label="primary rounded"/> 
<Button  definition="is-link is-rounded" label="link rounded"/>
<Button  definition="is-info is-rounded" label=" info rounded"/>
<Button  definition="is-success is-rounded" label="success rounded"/>
<Button  definition="is-warning is-rounded" label="warning rounded"/>
<Button  definition="is-danger is-rounded" label="danger rounded"/>
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-focused" label="primary focused"/>
<Button  definition="is-link is-focused" label="link focused"/> 
<Button  definition="is-info is-focused" label="info focused"/>
<Button  definition="is-success is-focused" label="success focused"/> 
<Button  definition="is-warning is-focused" label="warning focused"/>
<Button  definition="is-danger is-focused" label="danger focused"/> 
</ButtonList>

<ButtonList>
<Button  definition="is-primary is-active" label="primary active"/> 
<Button  definition="is-link is-active" label="link active"/>
<Button  definition="is-info is-active" label="info active"/>
<Button  definition="is-success is-active" label="success active"/> 
<Button  definition="is-warning is-active" label="warning active"/> 
<Button  definition="is-danger is-active" label="danger active"/> 
</ButtonList>

<ButtonList>
<Button  definition="is-loading" label="loading"/> 
<Button  definition="is-primary is-loading" label="loading"/>
<Button  definition="is-link is-loading" label="loading"/>
<Button  definition="is-info is-loading" label="loading"/>
<Button  definition="is-success is-loading" label="loading"/>
<Button  definition="is-warning is-loading" label="loading"/> 
<Button  definition="is-danger is-loading" label="loading"/>
</ButtonList>

<ButtonList>
<Button  definition="is-primary" disabled={true} label="primary disabled"/> 
<Button  definition="is-link"  disabled={true} label="link disabled"/> 
<Button  definition="is-info" disabled={true} label="info disabled"/>
<Button  definition="is-uccess" disabled={true} label="success disabled"/> 
<Button  definition="is-warning" disabled={true} label="warning disabled"/>
<Button  definition="is-danger" disabled={true} label="danger disabled"/>
</ButtonList>

<ButtonList>
<Button label="Custom" custom={custom}/>
<Button onClick={onClick} definition="is-success" label="No Custom"/>
</ButtonList>

</>
    ,
  
  document.getElementById("root"))

