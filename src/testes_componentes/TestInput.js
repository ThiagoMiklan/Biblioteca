import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Input from './biblioteca/Input'
import Icon from './biblioteca/Icon';

ReactDOM.render( 
    <div className="container is-fluid">
    <Input definition="is-primary" type="password" placeholder="Primary input"/>
    <Input definition="is-info" type="text" placeholder="Info input"/>
    <Input definition="is-success" type="text" placeholder="Success input"/>
    <Input definition="is-warning" type="text" placeholder="Warning input"/>
    <Input definition="is-danger" type="text" placeholder="Danger input"/>
    <br></br>
    <Input definition="is-small" type="text" placeholder="Small input"/>
    <Input definition="is-normal" type="text" placeholder="Normal input"/>
    <Input definition="is-medium" type="text" placeholder="Medium input"/>
    <Input definition="is-large" type="text" placeholder="Large input"/>
    <br></br>
    <Input definition="is-rounded" type="text" placeholder="Rounded input"/>
    <Input definition="is-focused" type="text" placeholder="Loading input"/>
    <Input definition="is-loading is-small" type="text" placeholder="Loading input small" />
    <Input definition="is-loading" type="text" placeholder="Loading input normal"/>
    <Input definition="is-loading is-medium" type="text" placeholder="Loading input medium" />
    <Input definition="is-loading is-large" type="text" placeholder="Loading input large"/>

    <Input definition="is-loading is-large" type="text" placeholder="Loading input large" disabled={true}/>
    <Input definition="is-loading is-large" type="text" value="Loading input large" icon={<Icon definition="icon is-small is-left" icon="fas fa-envelope"/>}/>


    
    </div>
   ,
document.getElementById('root'));
