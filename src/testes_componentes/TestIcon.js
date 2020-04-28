import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import Icon from './biblioteca/Icon';
import  {renderToString} from 'react-dom/server';

var x =  renderToString(<Icon icon_name="fas fa-home" definition="warning large"></Icon>);
var y = 0;

ReactDOM.render(
  <div className="container is-fluid">
      <Icon icon_name="fas fa-info-circle" definition="info"></Icon>
      <Icon icon_name="fas fa-check-square" definition="success"></Icon>
      <Icon icon_name="fas fa-exclamation-triangle" definition="warning"></Icon>
      <Icon icon_name="fas fa-ban" definition="danger"></Icon>

      <Icon icon_name="fas fa-home" definition="warning small"></Icon>
      <Icon icon_name="fas fa-home" definition="warning medium"></Icon>
      <Icon icon_name="fas fa-home" definition="warning large"></Icon>

    </div>

   
,
  document.getElementById("root"))
