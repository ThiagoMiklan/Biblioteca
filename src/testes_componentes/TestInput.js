import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Input from './biblioteca/form/Input'
import Icon from './biblioteca/elements/Icon';

ReactDOM.render( 
    <div className="containe is-fluid">
    <Input definition="primary" type="password" placeholder="Primary input"/>
    <Input definition="info" type="text" placeholder="Info input"/>
    <Input definition="success" type="text" placeholder="Success input"/>
    <Input definition="warning" type="text" placeholder="Warning input"/>
    <Input definition="danger" type="text" placeholder="Danger input"/>
    <br></br>
    <Input definition="small" type="text" placeholder="Small input"/>
    <Input definition="normal" type="text" placeholder="Normal input"/>
    <Input definition="medium" type="text" placeholder="Medium input"/>
    <Input definition="large" type="text" placeholder="Large input"/>
    <br></br>
    <Input definition="rounded" type="text" placeholder="Rounded input"/>
    <Input definition="focused" type="text" placeholder="Loading input"/>
    <Input definition="loading small" type="text" placeholder="Loading input small" loading={true}/>
    <Input definition="loading" type="text" placeholder="Loading input normal" loading={true}/>
    <Input definition="loading medium" type="text" placeholder="Loading input medium" loading={true}/>
    <Input definition="loading large" type="text" placeholder="Loading input large" loading={true}/>

    <Input definition="loading large" type="text" placeholder="Loading input large" loading={true} disabled={true}/>
    <Input definition="loading large" type="text" value="Loading input large" loading={true}  icon={<Icon definition="icon is-small is-left" icon="fas fa-envelope"/>}/>


    
    </div>
   ,
document.getElementById('root'));
