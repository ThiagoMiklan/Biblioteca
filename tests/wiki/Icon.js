import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Icon from './components/Icon';


ReactDOM.render(
  <div className="container is-fluid">
      <Icon icon_name="fas fa-home"></Icon>
      <Icon icon_name="fas fa-info-circle" definition="has-text-info"></Icon>
      <Icon icon_name="fas fa-check-square" definition="has-text-success"></Icon>
      <Icon icon_name="fas fa-exclamation-triangle" definition="has-text-warning"></Icon>
      <Icon icon_name="fas fa-ban" definition="has-text-danger"></Icon>
   </div>

   
,
  document.getElementById("root"))
